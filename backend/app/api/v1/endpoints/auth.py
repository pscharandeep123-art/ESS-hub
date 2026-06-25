from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from ...db.mongodb import get_database
from ...models.schemas import UserCreate, UserResponse, Token
from ...core.security import get_password_hash, verify_password, create_access_token
from ...core.config import settings
from datetime import timedelta, datetime
from bson import ObjectId

router = APIRouter()

@router.post("/register", response_model=UserResponse)
async def register(user: UserCreate):
    db = get_database()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")

    try:
        existing_user = await db.users.find_one({"email": user.email})
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")

        user_dict = user.dict()
        password = user_dict.pop("password")
        user_dict["hashed_password"] = get_password_hash(password)
        user_dict["created_at"] = datetime.utcnow()

        result = await db.users.insert_one(user_dict)
        user_dict["id"] = str(result.inserted_id)
        return user_dict
    except Exception as e:
        print(f"Registration error: {e}")
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    db = get_database()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")

    user = await db.users.find_one({"email": form_data.username})
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["email"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
