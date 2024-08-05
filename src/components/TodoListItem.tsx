import { useMutation } from "@apollo/client";
import { deleteTodoItem } from "../graphql/mutations";
import { getTodoList } from "../graphql/queries";
import { Todo } from "../graphql/types";

export function TodoListItem({ item }: { item: Todo }) {
  const [deleteTodoMutation, { loading }] = useMutation(deleteTodoItem, {
    refetchQueries: [
      {
        query: getTodoList,
      },
    ],
  });

  const deleteTodo = () => {
    const userConfirmation = confirm(`Delete todo "${item.name}"?`);
    if (userConfirmation) {
      const { id } = item;
      deleteTodoMutation({ variables: { id } });
    }
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>
        <button disabled={loading} onClick={deleteTodo}>
          {loading ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
}
