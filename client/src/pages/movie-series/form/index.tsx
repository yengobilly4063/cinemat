import { FC } from "react";
import useAddMovieSerie from "../hooks/useAddMovieSerieForm";

type Props = {
  addType: "movie" | "serie";
};

const AddMovieSeries: FC<Props> = ({ addType }) => {
  const { handleSubmitForm, handleAddMoviesInputChange, errorMessage } = useAddMovieSerie();

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={(event) => handleSubmitForm(event, addType)}>
        <h1>{addType === "movie" ? "Add Movie" : "Add Serie"}</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Url</label>
          <input type="url" name="image" id="image" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="year">year </label>
          <input type="number" min={1000} max={2022} name="year" id="year" onChange={handleAddMoviesInputChange} />
        </div>
        {errorMessage && (
          <div className="form-group">
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="form-group">
          <div className="form-action">
            <button className="btn-add">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovieSeries;
