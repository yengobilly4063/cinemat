import { useMutation, useQuery } from "@apollo/client";
import { DELETE_MOVIE } from "../../graphql/mutations/movie.mutations";
import { GET_MOVIES } from "../../graphql/queries/movie.queries";
import { Movie } from "../types/movie";

const useMovies = () => {
  const { data, refetch } = useQuery(GET_MOVIES);
  const [_deleteMovie, { data: _data }] = useMutation(DELETE_MOVIE);
  const movies = data?.movies ?? [];

  const deleteMovie = (movie: Movie) => {
    const { id } = movie;
    _deleteMovie({ variables: { id } });
  };

  if (_data?.success) {
    refetch();
  }

  return { movies, deleteMovie, refetch };
};

export default useMovies;
