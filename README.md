# Kanban Board Application

## 📌 Overview
This is a **full-stack Kanban board application** that allows users to securely log in, create, edit, and manage tasks. The project implements **JWT authentication**, a **React frontend**, and a **PostgreSQL database** managed with **Sequelize**.

## 🛠️ Technologies Used
### Frontend (Client)
- **React** (Vite-based setup)
- **React Router** for navigation
- **TypeScript** for type safety
- **JWT-Decode** for token management
- **Vite** for fast builds

### Backend (Server)
- **Node.js & Express** for server routing
- **Sequelize & PostgreSQL** for data management
- **Bcrypt** for password hashing
- **jsonwebtoken (JWT)** for authentication
- **CORS** to enable frontend-backend communication

### Development Tools
- **PostgreSQL** as the database
- **Insomnia/Postman** for API testing
- **Render** for deployment

## 🚀 Features
- **User Authentication**: Secure login/logout with JWT tokens.
- **Task Management**: Create, edit, delete tasks across multiple columns.
- **Authorization**: Users must be logged in to access the Kanban board.
- **Session Expiry**: Auto logout when inactive for security.
- **Deployment-Ready**: Configured for deployment on Render.

## 🏗️ Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/kanban-board.git
   cd kanban-board
   ```
2. **Set up the backend**
   ```sh
   cd server
   npm install
   ```
   - Create a `.env` file in the `server/` directory:
     ```env
     DB_NAME=kanban_db
     DB_USER=postgres
     DB_PASSWORD=yourpassword
     DB_HOST=localhost
     JWT_SECRET=your_jwt_secret
     PORT=10000
     NODE_ENV=production
     ```
   - Run database migrations:
     ```sh
     psql -U postgres -f server/db/schema.sql
     ```
   - Start the server:
     ```sh
     npm start
     ```

3. **Set up the frontend**
   ```sh
   cd ../client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:3001](http://localhost:3001)

## 🧪 Testing
- Use **Insomnia/Postman** to test API endpoints.
- Log in and verify that **protected routes** are inaccessible without authentication.
- Ensure tasks **persist in the database** after creation.

## 📌 Deployment
The project is **configured for deployment on Render**:
- **Backend**: Deployed as a **Web Service**.
- **Frontend**: Deployed as a **Static Site**.
- **PostgreSQL**: Hosted database configured via Render.

## 📚 Acknowledgments
I DO NOT take credit for all the code in this repository. This project was made possible with the help of:
- **My classmates**, who provided guidance and debugging assistance. Especially GitHub User: achensen
- **My tutor**, who helped me understand authentication and database setup.
- **ChatGPT**, which provided explanations and code structuring recommendations.

## 📜 License
This project is licensed under the **MIT License**.