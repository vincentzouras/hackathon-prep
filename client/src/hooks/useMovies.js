import { fetchMovies } from "../api/movieService";
import { useEffect, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMovies = async () => {
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, loading, error };
};

export default useMovies;
