from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    branch: Optional[str] = None
    current_year: Optional[int] = None

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: str = Field(..., alias="_id")
    hashed_password: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class UserResponse(UserBase):
    id: str

class Skill(BaseModel):
    name: str
    level: int # 1 to 5

class ProfileBase(BaseModel):
    bio: Optional[str] = None
    skills: List[Skill] = []
    experience: List[dict] = []
    education: List[dict] = []
    projects: List[dict] = []

class ProfileUpdate(ProfileBase):
    pass

class ResumeBase(BaseModel):
    content: dict
    ai_feedback: Optional[str] = None
    ats_score: Optional[int] = None

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
