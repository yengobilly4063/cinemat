import styles from "./add-movies-series.module.scss";
import "../../shared/styles/form.scss";
import AddSerie from "./form";
import useAddMovieSerieForm from "./hooks/useAddMovieSerieForm";
import AddMovieSeries from "./form";
const AddMoviesSeries = () => {
  const { switchAddType, addType } = useAddMovieSerieForm();
  return (
    <div className={styles.wrapper}>
      <button className="form-wrapper" onClick={switchAddType}>
        {addType === "movie" ? "Add Serie" : "Add Movie"}
      </button>
      <div className={styles.search}>
        <input type="text" name="title" />
        <button>Search</button>
      </div>
      <div className={styles.addSection}>
        <AddMovieSeries addType={addType} />
      </div>
    </div>
  );
};

export default AddMoviesSeries;
