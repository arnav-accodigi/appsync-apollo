import { gql } from "@apollo/client";

export const createTodoItem = gql`
  mutation CreateTodo($name: String!, $description: String) {
    createTodo(input: { description: $description, name: $name }) {
      __typename
    }
  }
`;

export const deleteTodoItem = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(input: { id: $id }) {
      __typename
    }
  }
`;
