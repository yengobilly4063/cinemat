import useAddMovies from "../hooks/useAddMovies";

const AddMovie = () => {
  const { handleSubmitForm, handleAddMoviesInputChange, errorMessage } = useAddMovies();

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmitForm}>
        <h1>Add Movie</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input required type="text" name="title" id="title" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input required type="text" name="description" id="description" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Url</label>
          <input required type="url" name="image" id="image" onChange={handleAddMoviesInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="year">year </label>
          <input
            required
            type="number"
            min={1000}
            max={2022}
            name="year"
            id="year"
            onChange={handleAddMoviesInputChange}
          />
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

export default AddMovie;
