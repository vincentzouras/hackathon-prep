import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
