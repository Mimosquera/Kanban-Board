const forceDatabaseRefresh = false;
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/index.js";
import { sequelize } from "./models/index.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;
// Enable CORS
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
// Serves static files in the client's dist folder
app.use(express.static("../client/dist"));
app.use(routes);
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
