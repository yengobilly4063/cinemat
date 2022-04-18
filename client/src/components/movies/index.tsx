import { FC } from "react";
import { Movie } from "../../shared/types/movie";
import MovieItem from "./movie-item";

type Props = {
  movies?: Movie[];
};
const Movies: FC<Props> = ({ movies }) => {
  if (!movies?.length) {
    return null;
  }
  return (
    <>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </>
  );
};

export default Movies;
