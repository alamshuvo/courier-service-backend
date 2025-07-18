# 🚚 courier-service-backend

A robust and scalable backend API built with **Node.js**, **Express.js**, **MongoDB**, and **TypeScript**. Designed for courier service systems with modular architecture and clean code practices.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **TypeScript**
- **dotenv**
- **ESLint**

---

## 🚀 Features

- 📦 Feature-based modular folder structure
- ✅ Role-based authentication
- 🔐 JWT-based secure login
- 📂 Environment-based config
- ⚠️ Custom error handling
- ✨ Clean, maintainable code

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/alamshuvo/courier-service-backend.git
cd courier-service-backend
2. Install Dependencies
npm install
3. Setup Environment Variables
Copy .env.example and fill in your config:
cp .env.example .env
4. Start Development Server
npm run start:dev
📁 Project Structure
courier/
│
├── src/
│   ├── app/
│   │   ├── config/          # App-level configurations
│   │   ├── middlewares/     # Global & custom middlewares
│   │   ├── modules/         # Feature modules (auth, user, etc.)
│   │   ├── routes/          # Centralized route management
│   │   ├── utils/           # Utility functions
│   │   ├── error/           # Custom error handlers
│   │   └── interface/       # Shared TypeScript interfaces
│   │
│   ├── app.ts               # Express app configuration
│   └── server.ts            # Entry point – DB connection & server startup
│
├── .env                     # Actual environment variables
├── .env.example             # Sample .env file
├── .eslintrc.json           # ESLint configuration
├── tsconfig.json            # TypeScript compiler options
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
🧪 Available Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run start`     | Run server in production mode     |
| `npm run start:dev` | Run server in development mode    |
| `npm run lint`      | Run ESLint for code linting       |
| `npm run build`     | Compile TypeScript into JS output |
