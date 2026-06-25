# Engineering Student Success Hub (ESS-Hub)

## 1. Project Overview
The **Engineering Student Success Hub (ESS-Hub)** is a comprehensive full-stack web application designed specifically for engineering students. It serves as a unified platform for skill management, resume building, internship discovery, and AI-driven career guidance. By integrating modern web technologies with AI, ESS-Hub helps students bridge the gap between academic learning and industry requirements.

## 2. System Architecture
The application follows a standard **MERN-like architecture** but uses **FastAPI** for a high-performance backend.

- **Frontend:** React.js with Material UI (MUI) for a clean, professional, and responsive user interface.
- **Backend:** FastAPI (Python) for rapid API development and seamless AI integration.
- **Database:** MongoDB Atlas (NoSQL) for flexible data storage.
- **AI Engine:** LLM-based logic (e.g., OpenAI or similar) for resume analysis and career path recommendations.
- **Authentication:** JWT (JSON Web Tokens) for secure, stateless user sessions.

## 3. Module Definitions
1.  **Auth Module:** Handles user registration, login, and session management.
2.  **Profile & Skill Tracker:** Allows students to maintain their profile and track technical/soft skills.
3.  **Resume Builder:** An interactive form-based builder that generates professional resumes and provides AI-based ATS feedback.
4.  **AI Career Adviser:** Analyzes student skills and suggests potential career paths or learning resources.
5.  **Internship Finder:** A module to search and save relevant internship opportunities.
6.  **Placement Prep:** Provides mock interview questions and placement resources.
7.  **Analytics Dashboard:** Visual representation of student progress and skill growth.

## 4. Database Schema (MongoDB Collections)

### Users
- `_id`: ObjectId
- `full_name`: String
- `email`: String (Unique)
- `password_hash`: String
- `branch`: String (e.g., Computer, Mechanical, etc.)
- `current_year`: Integer
- `created_at`: Timestamp

### Profiles
- `user_id`: ObjectId (Reference)
- `bio`: String
- `skills`: Array of Objects { `name`: String, `level`: Integer (1-5) }
- `experience`: Array of Objects
- `education`: Array of Objects
- `projects`: Array of Objects

### Resumes
- `user_id`: ObjectId
- `content`: JSON object containing resume sections
- `ai_feedback`: String
- `ats_score`: Integer

### Internships (Mock/Scraped)
- `title`: String
- `company`: String
- `location`: String
- `description`: String
- `tags`: Array

## 5. Frontend Pages & UI Flow
1.  **Landing Page:** Introduction to ESS-Hub and Call-to-Action (Register/Login).
2.  **Register/Login:** Simple forms for user onboarding.
3.  **Student Dashboard:** Overview of progress, recommended actions, and quick links.
4.  **Skill Tracker:** Visual interface to add and update skills.
5.  **Resume Builder:** Multi-step form to input data + AI feedback panel.
6.  **Career Adviser:** Interactive AI chat or report page for guidance.
7.  **Internship Portal:** Searchable list of internships.

## 6. Backend API Structure
- `POST /auth/register`: User signup.
- `POST /auth/login`: User login, returns JWT.
- `GET /user/profile`: Retrieve profile data.
- `PUT /user/profile`: Update profile/skills.
- `POST /resume/build`: Create/Update resume data.
- `GET /ai/resume-feedback`: Get AI-driven suggestions for the current resume.
- `GET /ai/career-advice`: Get skill-gap analysis and career path suggestions.
- `GET /internships`: List available internships.

## 7. AI Integration Plan
- **Resume Feedback:** The backend sends the resume text to an LLM with a prompt to "act as an ATS expert" and provide improvements.
- **Skill-Gap Analysis:** Compare the user's current skills against common industry job descriptions and suggest missing skills.
- **Career Recommendations:** Based on the user's branch and top skills, recommend specific roles (e.g., "Full Stack Dev", "Data Analyst").

## 8. Development Phases
- **Phase 1 (MVP):** Auth, Profile management, and Basic Skill Tracker.
- **Phase 2:** Resume Builder (Form to PDF) and Mock Internship data.
- **Phase 3:** AI Integration (LLM API) for resume feedback and career advice.
- **Phase 4:** Analytics Dashboard and UI Polishing.

## 9. Viva Preparation Questions
1.  **Why FastAPI instead of Node.js/Express?** FastAPI is faster, provides automatic documentation (Swagger), and has better native support for Python-based AI libraries.
2.  **How is JWT secure?** It uses digital signatures. While the payload is readable, it cannot be tampered with without the secret key.
3.  **Why MongoDB?** Engineering student profiles can have varying structures (different branches, projects, etc.). NoSQL provides the flexibility needed.
4.  **How does the AI give feedback?** We use prompt engineering to guide an LLM to analyze the JSON resume data and return constructive feedback.
5.  **What is an ATS score?** Applicant Tracking System score; it measures how well a resume is optimized for automated screening tools.

## 10. How to Run (Local Setup)

### Prerequisites
- Python 3.8+
- Node.js & npm
- MongoDB (Local or Atlas)

### Backend Setup
1. Navigate to `backend` directory: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate it:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the server: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---
*Created for the Final Year Diploma Project.*
