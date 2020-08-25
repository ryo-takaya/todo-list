import { gql } from "@apollo/client";

export const ITEM = gql`
  fragment item on taskItems {
    id
    text
    checked
  }
`;
