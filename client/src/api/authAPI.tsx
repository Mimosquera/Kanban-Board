import { UserLogin } from "../interfaces/UserLogin";

const API_URL = process.env.NODE_ENV === "production" 
  ? "https://kanban-board-xyab.onrender.com"  // Replace with actual Render backend URL
  : "http://localhost:3001";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "User information not retrieved, check network tab!");
    }

    return data;
  } catch (err) {
    console.error("Error from user login:", err);
    return Promise.reject("Could not fetch user info");
  }
};

export { login };