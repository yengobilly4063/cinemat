import useMovies from "./useMovies";

const useContent = () => {
  const { movies } = useMovies();

  return { movies };
};

export default useContent;
