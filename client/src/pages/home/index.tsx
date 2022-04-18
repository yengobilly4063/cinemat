import React from "react";
import Movies from "../../components/movies";
import useContent from "../../shared/hooks/useContent";
import styles from "./home.module.scss";

const HomePage = () => {
  const { movies } = useContent();
  return (
    <div className={styles.wrapper}>
      <Movies movies={movies} />
    </div>
  );
};

export default HomePage;
