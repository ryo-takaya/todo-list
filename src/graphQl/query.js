import { gql } from "@apollo/client";

export const TASK_ITEMS = gql`
  query taskItems {
    taskItems {
      id
      text
      checked
    }
  }
`;
