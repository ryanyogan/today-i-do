import AuthCheck from "../../components/AuthCheck";
import NewTodo from "../../components/NewTodo";

export default function NewTodoPage() {
  return (
    <AuthCheck>
      <NewTodo />
    </AuthCheck>
  );
}
