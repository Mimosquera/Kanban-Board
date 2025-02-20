const API_URL = "http://localhost:3001"; // Explicitly define backend API
import { UserLogin } from "../interfaces/UserLogin"; // Ensure correct path

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
      throw new Error(data.message || "Login failed");
    }

    return data.token;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export { login };