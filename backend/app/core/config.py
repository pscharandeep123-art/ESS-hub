from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "ESS-Hub"
    MONGODB_URL: str = "mongodb://localhost:27017" # Default for local, override in .env
    DATABASE_NAME: str = "ess_hub"
    SECRET_KEY: str = "your-secret-key-for-jwt" # Change in production
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    OPENAI_API_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()
