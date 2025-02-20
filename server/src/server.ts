const forceDatabaseRefresh = false;

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes/index.js";
import { sequelize } from "./models/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000; // Use dynamic port for Render

// Enable CORS
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? "*" : "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("../client/dist"));
}

app.use(routes);

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});