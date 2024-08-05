import { gql } from "@apollo/client";

export const getTodoList = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;
