import gql from "graphql-tag";

const GET_AUTH_USER = gql`
  query getCurrentUser {
    user: me {
      id
      name
      username
    }
  }
`;

export { GET_AUTH_USER };
