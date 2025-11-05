import express from "express";
import movieController from "../controllers/movieController.js";

const router = express.Router();

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);

export default router;
