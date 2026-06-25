# Engineering Student Success Hub (ESS-Hub)

## 1. Project Overview
The **Engineering Student Success Hub (ESS-Hub)** is a comprehensive full-stack web application designed specifically for engineering students. It serves as a unified platform for skill management, resume building, internship discovery, and AI-driven career guidance.

## 2. System Architecture
- **Frontend:** React.js + Material UI (MUI)
- **Backend:** FastAPI (Python)
- **Database:** MongoDB Atlas (NoSQL)
- **AI Engine:** Simulated LLM logic for resume & career analysis
- **Auth:** JWT (JSON Web Tokens)

## 3. How to Run (Local Setup)

### Prerequisites
- Python 3.8+
- Node.js & npm
- **MongoDB**: You need a running MongoDB instance.

### 🍃 MongoDB Setup (Required)
If you don't have MongoDB installed locally, the app will fail to register/login.
**Option A: MongoDB Atlas (Recommended)**
1. Create a free account at [mongodb.com](https://www.mongodb.com/cloud/atlas).
2. Create a free Cluster and get your **Connection String**.
3. Create a file named `.env` inside the `backend` folder:
   ```env
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/ess_hub?retryWrites=true&w=majority
   ```

**Option B: Local MongoDB**
- Ensure MongoDB Service is running on `mongodb://localhost:27017`.

---

### 🚀 Running the Backend (FastAPI)
1. Open a terminal: `cd backend`
2. `python -m venv venv`
3. Activate venv: `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
4. `pip install -r requirements.txt`
5. `uvicorn main:app --reload`
6. **Verify:** Go to `http://localhost:8000/api/v1/health` - it should say `{"status": "ok"}`.

### 🎨 Running the Frontend (React)
1. Open a new terminal: `cd frontend`
2. `npm install`
3. `npm run dev`
4. Visit: [http://localhost:5173](http://localhost:5173)

---

## 4. Troubleshooting
- **"Registration failed"**: This is usually because the backend is not connected to MongoDB. Check the `backend` terminal for error logs.
- **Connection Refused**: Ensure the backend is running on port 8000.
- **VS Code**: Use the "Run and Debug" tab to start both servers easily.

---
*Created for the Final Year Diploma Project.*
