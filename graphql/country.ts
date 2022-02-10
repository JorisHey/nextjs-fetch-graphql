import { gql } from "graphql-request";

export const COUNTRY = (countryCode: string) => gql`
  query COUNTRY($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
