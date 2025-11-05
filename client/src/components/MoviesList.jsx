import useMovies from "../hooks/useMovies";

const MoviesList = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
