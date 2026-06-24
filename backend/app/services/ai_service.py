import json
from ..core.config import settings

class AIService:
    @staticmethod
    async def get_resume_feedback(resume_content: dict):
        # Mocking LLM logic for demo/viva purposes if no API key is provided
        # In a real scenario, we would use openai.ChatCompletion.create

        skills = resume_content.get("skills", [])
        experience = resume_content.get("experience", [])

        feedback = "### AI Resume Feedback\n\n"

        if not skills:
            feedback += "- **Warning:** No skills listed. Add technical skills to pass ATS.\n"
        else:
            feedback += f"- You have listed {len(skills)} skills. Try to group them by category (e.g., Languages, Frameworks).\n"

        if not experience:
            feedback += "- **Tip:** Lack of experience? Add academic projects or internships.\n"
        else:
            feedback += "- Great! You have professional experience. Use action verbs like 'Developed', 'Optimized', etc.\n"

        feedback += "\n**Overall Score (Estimated):** 65/100"

        return {
            "feedback": feedback,
            "ats_score": 65 if skills and experience else 40
        }

    @staticmethod
    async def get_career_advice(skills: list, branch: str):
        feedback = f"Based on your branch ({branch}) and current skills:\n\n"

        if "Python" in str(skills) or "Java" in str(skills):
            feedback += "- You are on the right track for **Software Engineering** roles.\n"

        if branch == "Computer" or branch == "IT":
            feedback += "- Consider learning Cloud Computing (AWS/Azure) to boost your profile.\n"

        feedback += "- Suggested Role: Full Stack Developer / Associate Engineer."

        return {"advice": feedback}
