import movieRepository from "../repositories/movieRepository.js";

const getAllMovies = async () => {
  try {
    const movies = await movieRepository.findAll();
    return movies;
  } catch (error) {
    throw new Error("Error fetching movies");
  }
};

const getMovieById = async (id) => {
  try {
    const movie = await movieRepository.findById(id);
    return movie;
  } catch (error) {
    throw new Error("Error fetching movie");
  }
};

export default { getAllMovies, getMovieById };
