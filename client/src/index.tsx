import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo.client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./shared/context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
