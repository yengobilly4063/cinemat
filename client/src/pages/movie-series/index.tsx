import styles from "./add-movies-series.module.scss";
import "../../shared/styles/form.scss";
import AddMovie from "./add-movie";
import useForm from "../shared/hooks/useForm";
const AddMoviesSeries = () => {
  const { addType, switchAddType } = useForm();

  const getSwitchText = () => {
    console.log(addType);
    switch (addType) {
      case "movie":
        return "Add Serie";
      default:
        return "Add Movie";
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className="form-wrapper" onClick={switchAddType}>
        {getSwitchText()}
      </button>
      <div className={styles.search}>
        <input type="text" name="title" />
        <button>Search</button>
      </div>
      <div className={styles.addSection}>{addType === "movie" && <AddMovie />}</div>
    </div>
  );
};

export default AddMoviesSeries;
