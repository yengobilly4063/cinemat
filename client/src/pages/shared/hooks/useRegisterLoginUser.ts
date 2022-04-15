import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAuthContext } from "../../../shared/hooks/useAuthContext";
import useHistory from "../../../shared/hooks/useHistory";
import { User } from "../../../shared/types/user";
const useRegisterUser = () => {
  const [input, setInput] = useState<User>({ username: "", name: "", password: "" });
  const [errors, setErrors] = useState<Partial<User>>();
  const [submitError, setSubmitError] = useState<string>();
  const [page, setPage] = useState<"register" | "login">("register");
  const { register, login, error, clearError } = useAuthContext();
  const { push } = useHistory();
  const { isLoggedIn } = useAuthContext();

  const handleRegisterFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { name, username, password } = input;
    if (!name || !password || !username) {
      getErrorMessages(input);
      return;
    }
    register(input);
  };

  const handleLoginFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { username, password } = input;
    if (!password || !username) {
      getErrorMessages(input);
      return;
    }
    login(input);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    clearErrors();
  };

  useEffect(() => {
    if (error) {
      setSubmitError(error);
    }
  }, [error]);

  useEffect(() => {
    if (["register", "login"].includes(page) && isLoggedIn) {
      push("/");
    }
  }, [page]);

  const clearErrors = () => {
    setErrors(undefined);
    setSubmitError("");
    clearError();
  };

  const getErrorMessages = (input: Partial<User>) => {
    const { name, username, password } = input;
    if (page === "register") {
      if (!name) {
        setErrors((prevInput) => {
          return {
            ...prevInput,
            ["name"]: "Please provide name",
          };
        });
      }
    }
    if (!username) {
      setErrors((prevInput) => {
        return {
          ...prevInput,
          ["username"]: "Please provide username",
        };
      });
    }
    if (!password || password.length < 8) {
      setErrors((prevInput) => {
        return {
          ...prevInput,
          ["password"]: "Password is required and must be at least 8 characters",
        };
      });
    }
  };
  return { handleRegisterFormSubmit, handleLoginFormSubmit, handleInputChange, errors, submitError, setPage };
};

export default useRegisterUser;
