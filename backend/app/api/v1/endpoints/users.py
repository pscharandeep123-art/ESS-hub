from fastapi import APIRouter, Depends, HTTPException
from app.db.mongodb import get_database
from app.models.schemas import ProfileBase, ProfileUpdate, UserResponse
from app.api.v1.endpoints.deps import get_current_user
from bson import ObjectId

router = APIRouter()

@router.get("/me", response_model=UserResponse)
async def read_user_me(current_user: dict = Depends(get_current_user)):
    current_user["id"] = str(current_user["_id"])
    return current_user

@router.get("/profile", response_model=ProfileBase)
async def get_profile(current_user: dict = Depends(get_current_user)):
    db = get_database()
    profile = await db.profiles.find_one({"user_id": current_user["_id"]})
    if not profile:
        # Return default profile if not exists
        return ProfileBase()
    return profile

@router.put("/profile", response_model=ProfileBase)
async def update_profile(
    profile_update: ProfileUpdate,
    current_user: dict = Depends(get_current_user)
):
    db = get_database()
    profile_dict = profile_update.dict()

    await db.profiles.update_one(
        {"user_id": current_user["_id"]},
        {"$set": profile_dict},
        upsert=True
    )
    return profile_dict
