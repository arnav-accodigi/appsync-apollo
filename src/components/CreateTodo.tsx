import { useMutation } from "@apollo/client";
import { createTodoItem } from "../graphql/mutations";
import { getTodoList } from "../graphql/queries";
import { useState } from "react";

export function CreaeteTodo() {
  const [createTodoMutation, { loading }] = useMutation(createTodoItem, {
    refetchQueries: [
      {
        query: getTodoList,
      },
    ],
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const createTodo = async () => {
    await createTodoMutation({
      variables: {
        name,
        description,
      },
    });

    setName("");
    setDescription("");
  };

  return (
    <tr>
      <td>
        <input
          id="todoname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          id="tododescription"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
        <button disabled={loading} onClick={createTodo}>
          {loading ? "Creating..." : "Create"}
        </button>
      </td>
    </tr>
  );
}
