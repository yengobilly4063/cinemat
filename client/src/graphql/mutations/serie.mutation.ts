import gql from "graphql-tag";

const ADD_SERIE = gql`
  mutation AddSerie($input: SerieInput!) {
    serie: addSerie(input: $input) {
      id
      userId
      description
      title
      year
    }
  }
`;

export { ADD_SERIE };
