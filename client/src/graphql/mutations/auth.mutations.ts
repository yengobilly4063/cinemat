import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    user: registerUser(input: $input) {
      id
      name
      username
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($input: LoginUserInput!) {
    token: loginUser(input: $input)
  }
`;

export { REGISTER_USER, LOGIN_USER };
