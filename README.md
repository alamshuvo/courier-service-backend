# courier-service-backend

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **TypeScript**
- **ESLint**
- **dotenv**

---
# 🚀 Full Stack Backend API (Node.js + Express + MongoDB + TypeScript)

This is a scalable and well-structured backend API starter built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **TypeScript**. It includes essential configurations like ESLint, dotenv, and basic structure for authentication, user roles, and modular coding.

---

## 📁 Project Structure

courier/
│
├── src/
│   ├── app/
│   │   ├── middlewares/     # Global & custom middlewares
│   │   ├── modules/         # Feature-based folders (auth, user, etc.)
│   │   ├── utils/           # Utility functions (e.g., catchAsync, sendResponse)
│   │   ├── config/          # App-level configs
│   │   ├── error/           # Custom error handling (ApiError, global handler)
│   │   ├── interface/       # Reusable TypeScript interfaces
│   │   └── routes/          # Central route management
│   │
│   ├── app.ts               # Main Express app configuration 
│   ├── server.ts            # Entry point - connects DB and starts server
│
├── .env                     # Environment variables
├── .env.example             # Sample env file (no secrets)
├── .eslintrc.json           # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and scripts
└── README.md                # You're reading it!





## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/alamshuvo/courier-service-backend.git
cd your-repo-name

npm install

setup .env file you follow env.example

npm run start:dev


