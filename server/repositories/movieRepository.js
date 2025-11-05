import Movie from "../models/movie.js";

const findAll = () => Movie.find();

const findById = (id) => Movie.findById(id);

export default { findAll, findById };
