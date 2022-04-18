import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query GetMovies {
    movies: getMovies {
      id
      userId
      title
      description
      image
      year
    }
  }
`;
