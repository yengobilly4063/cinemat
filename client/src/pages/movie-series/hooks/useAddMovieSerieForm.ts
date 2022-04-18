import { useMutation } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ADD_MOVIE } from "../../../graphql/mutations/movie.mutations";
import { ADD_SERIE } from "../../../graphql/mutations/serie.mutation";
import useHistory from "../../../shared/hooks/useHistory";
import useMovies from "../../../shared/hooks/useMovies";
import useForm from "../../shared/hooks/useForm";

const useAddMovieSerie = () => {
  const [addType, setAddType] = useState<"movie" | "serie">("serie");
  const { input, handleInputChange } = useForm();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { push } = useHistory();
  const [addMovie] = useMutation(ADD_MOVIE);
  const [addSerie] = useMutation(ADD_SERIE);
  const { refetch } = useMovies();

  const switchAddType = () => {
    addType === "movie" ? setAddType("serie") : setAddType("serie");
  };

  const handleSubmitForm = (event: FormEvent, type: "movie" | "serie") => {
    event.preventDefault();
    if (type === "movie") {
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
    }
    if (type === "serie") {
      addSerie({ variables: { input: { ...input } } })
        .then((data) => {
          const { serie } = data.data;
          if (serie) {
            push("/add-seasons");
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const handleAddMoviesInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    setErrorMessage("");
  };

  return {
    addType,
    switchAddType,
    handleSubmitForm,
    handleInputChange,
    handleAddMoviesInputChange,
    errorMessage,
  };
};

export default useAddMovieSerie;
