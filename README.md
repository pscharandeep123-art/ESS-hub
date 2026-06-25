# Engineering Student Success Hub (ESS-Hub)

## 1. Project Overview
The **Engineering Student Success Hub (ESS-Hub)** is a comprehensive full-stack web application designed specifically for engineering students. It serves as a unified platform for skill management, resume building, internship discovery, and AI-driven career guidance. By integrating modern web technologies with AI, ESS-Hub helps students bridge the gap between academic learning and industry requirements.

## 2. System Architecture
The application follows a standard **MERN-like architecture** but uses **FastAPI** for a high-performance backend.

- **Frontend:** React.js with Material UI (MUI) for a clean, professional, and responsive user interface.
- **Backend:** FastAPI (Python) for rapid API development and seamless AI integration.
- **Database:** MongoDB Atlas (NoSQL) for flexible data storage.
- **AI Engine:** LLM-based logic for resume analysis and career path recommendations.
- **Authentication:** JWT (JSON Web Tokens) for secure, stateless user sessions.

## 3. Module Definitions
1.  **Auth Module:** Handles user registration, login, and session management.
2.  **Profile & Skill Tracker:** Allows students to maintain their profile and track technical/soft skills.
3.  **Resume Builder:** Interactive form-based builder with AI-based ATS feedback.
4.  **AI Career Adviser:** Analyzes skills and suggests potential career paths.
5.  **Internship Finder:** Search and save relevant internship opportunities.
6.  **Placement Prep:** Mock interview questions and placement resources.
7.  **Analytics Dashboard:** Visual representation of student progress.

## 4. Database Schema (MongoDB Collections)
- **Users**: Credentials, branch, and basic info.
- **Profiles**: Bio, nested skills array, experience, and education.
- **Resumes**: Content JSON, AI feedback text, and ATS score.

## 5. How to Run (Local Setup)

### Prerequisites
- Python 3.8+
- Node.js & npm
- MongoDB (Local or Atlas)

### 🚀 Running the Backend (FastAPI)
**Crucial:** You must be inside the `backend` folder to run these commands.
1. Open a terminal and navigate to backend: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate it:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install requirements: `pip install -r requirements.txt`
5. Run the app: `uvicorn main:app --reload`
   - *Note: If you run `py main.py` from the root, it will fail. Always use the `cd backend` command first.*

### 🎨 Running the Frontend (React)
1. Open a **new** terminal and navigate to frontend: `cd frontend`
2. Install packages: `npm install`
3. Start the app: `npm run dev`
4. Visit: [http://localhost:5173](http://localhost:5173)

### 🛠 Running in VS Code
1. Open the project root in VS Code.
2. Go to the **Run and Debug** tab (Ctrl+Shift+D).
3. Select **"Backend: FastAPI"** and press F5.
4. Select **"Frontend: npm run dev"** and press F5.
   - *These configurations are pre-set in `.vscode/launch.json` and will automatically use the correct folders.*

## 6. Viva Preparation Questions
1.  **FastAPI vs Node?** FastAPI is faster, uses Python (better for AI), and auto-generates Swagger docs.
2.  **JWT Security?** Uses digital signatures; stateless and secure for multi-device login.
3.  **NoSQL/MongoDB?** Flexible schema is perfect for varying student profiles and resume structures.
4.  **AI Logic?** Prompt engineering is used to analyze JSON resume data for constructive feedback.

---
*Created for the Final Year Diploma Project.*
