import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { apiUrl } from "../shared/helpers/api";
import { getAccessToken } from "../shared/helpers/auth";

const httpLink = createHttpLink({
  uri: apiUrl,
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
