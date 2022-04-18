import { useMutation } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ADD_MOVIE } from "../../../graphql/mutations/movie.mutations";
import useHistory from "../../../shared/hooks/useHistory";
import useMovies from "../../../shared/hooks/useMovies";
import useForm from "../../shared/hooks/useForm";

const useAddMovies = () => {
  const { input, handleInputChange } = useForm();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { push } = useHistory();
  const [addMovie] = useMutation(ADD_MOVIE);
  const { refetch } = useMovies();

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    addMovie({ variables: { input: { ...input } } })
      .then((data) => {
        const { movie } = data.data;
        if (movie) {
          refetch();
          push("/");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleAddMoviesInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    setErrorMessage("");
  };

  return { handleSubmitForm, handleInputChange, handleAddMoviesInputChange, errorMessage };
};

export default useAddMovies;
