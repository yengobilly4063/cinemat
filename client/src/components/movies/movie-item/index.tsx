import { FC } from "react";
import { Movie } from "../../../shared/types/movie";
import styles from "./movie-item.module.scss";
import noImage from "../../../assets/noImage.png";
import useMovies from "../../../shared/hooks/useMovies";
type Props = {
  movie?: Movie;
};
const MovieItem: FC<Props> = ({ movie }) => {
  const { deleteMovie } = useMovies();
  if (!movie) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={movie?.image ?? noImage} className={styles.image} alt={movie?.title} />
        <div className={styles.body}>
          <h4>{movie?.title?.toUpperCase()}</h4>
          <p>{movie?.description}</p>
          <p className={styles.year}>Year: {movie?.year}</p>
        </div>
      </div>
      <div className={styles.action}>
        <button className="btn-danger" onClick={() => deleteMovie(movie)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
