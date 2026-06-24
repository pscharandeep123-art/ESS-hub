from fastapi import APIRouter, Depends
from ....services.ai_service import AIService
from ....db.mongodb import get_database
from .deps import get_current_user

router = APIRouter()

@router.get("/resume-feedback")
async def get_resume_feedback(current_user: dict = Depends(get_current_user)):
    db = get_database()
    resume = await db.resumes.find_one({"user_id": current_user["_id"]})
    if not resume:
        return {"feedback": "Please build your resume first."}

    result = await AIService.get_resume_feedback(resume.get("content", {}))

    # Update resume with AI feedback
    await db.resumes.update_one(
        {"user_id": current_user["_id"]},
        {"$set": {"ai_feedback": result["feedback"], "ats_score": result["ats_score"]}}
    )

    return result

@router.get("/career-advice")
async def get_career_advice(current_user: dict = Depends(get_current_user)):
    db = get_database()
    profile = await db.profiles.find_one({"user_id": current_user["_id"]})
    skills = profile.get("skills", []) if profile else []
    branch = current_user.get("branch", "Engineering")

    advice = await AIService.get_career_advice(skills, branch)
    return advice
