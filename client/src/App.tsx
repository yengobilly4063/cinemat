import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import NotFound from "./components/not-found/NotFound";
import ProtectedRoute from "./components/protected-route";
import HomePage from "./pages/home";
import LoginUser from "./pages/login-user";
import AddMoviesSeries from "./pages/movie-series";
import RegisterUser from "./pages/register-user";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/register" exact component={RegisterUser} />
        <Route path="/login" exact component={LoginUser} />
        <Route path="/add" exact component={AddMoviesSeries} />
        <ProtectedRoute path="/" exact component={HomePage} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" from="*" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
