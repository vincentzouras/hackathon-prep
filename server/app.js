import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import morgan from "morgan";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("API is working...");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed, not starting server:", err);
    process.exit(1);
  });
