import gql from "graphql-tag";
const ADD_MOVIE = gql`
  mutation addMovie($input: MovieInput!) {
    movie: addMovie(input: $input) {
      id
      userId
      title
      description
      image
      year
    }
  }
`;

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: String!) {
    success: deleteMovie(id: $id)
  }
`;

export { ADD_MOVIE, DELETE_MOVIE };
