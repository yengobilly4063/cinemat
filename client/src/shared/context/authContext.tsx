import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useState, createContext, useEffect } from "react";
import { LOGIN_USER, REGISTER_USER } from "../../graphql/mutations/auth.mutations";
import { GET_AUTH_USER } from "../../graphql/queries/user.queries";
import { isAuthToken, storeAccessToken } from "../helpers/auth";
import useHistory from "../hooks/useHistory";
import { User } from "../types/user";

export const AuthContext = createContext({
  user: {} as User | null,
  isLoggedIn: false,
  login: (user: Partial<User>) => {},
  register: (user: Partial<User>) => {},
  logout: () => {},
  error: "",
  clearError: () => {},
});

type Props = {
  children?: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthToken());
  const [registerUser] = useMutation(REGISTER_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const [getCurrentUser, { data }] = useLazyQuery(GET_AUTH_USER);
  const { push } = useHistory();

  const register = (user: Partial<User>) => {
    const { name, username, password } = user;
    registerUser({ variables: { input: { name, username, password } } })
      .then(() => {
        push("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const login = (user: Partial<User>) => {
    const { username, password } = user;
    loginUser({ variables: { input: { username, password } } })
      .then((data) => {
        const { token } = data.data;
        storeAccessToken(token);
        setIsLoggedIn(true);
        push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    getCurrentUser();
    if (data) {
      const { user } = data;
      setUser(user);
    }
  }, [isLoggedIn, data, user]);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
  };

  const clearError = () => {
    setError("");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout, error, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};
