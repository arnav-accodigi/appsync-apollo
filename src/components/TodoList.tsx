import { useQuery } from "@apollo/client";
import { getTodoList } from "../graphql/queries";
import { TodoListItem } from "./TodoListItem";
import { CreaeteTodo } from "./CreateTodo";
import { Todo } from "../graphql/types";

export function TodoList() {
  const { loading, error, data } = useQuery<{ listTodos: { items: Todo[] } }>(
    getTodoList
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <table cellSpacing={16}>
      <thead key="header-list-item">
        <tr>
          <th align="left">Name</th>
          <th align="left">Description</th>
          <th align="left">Options</th>
        </tr>
      </thead>
      <tbody>
        {data?.listTodos?.items.map((item: Todo) => (
          <TodoListItem key={item.id} item={item} />
        ))}
        <CreaeteTodo />
      </tbody>
    </table>
  );
}
