from fastapi import APIRouter, Depends, HTTPException
from ....db.mongodb import get_database
from ....models.schemas import ResumeBase
from .deps import get_current_user
from bson import ObjectId

router = APIRouter()

@router.get("/", response_model=ResumeBase)
async def get_resume(current_user: dict = Depends(get_current_user)):
    db = get_database()
    resume = await db.resumes.find_one({"user_id": current_user["_id"]})
    if not resume:
        return ResumeBase(content={})
    return resume

@router.post("/", response_model=ResumeBase)
async def save_resume(
    resume_in: ResumeBase,
    current_user: dict = Depends(get_current_user)
):
    db = get_database()
    resume_dict = resume_in.dict()
    resume_dict["user_id"] = current_user["_id"]

    await db.resumes.update_one(
        {"user_id": current_user["_id"]},
        {"$set": resume_dict},
        upsert=True
    )
    return resume_dict
