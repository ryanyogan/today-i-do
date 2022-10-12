import AuthCheck from "../../components/AuthCheck";

export default function NewTodoPage() {
  return (
    <AuthCheck>
      <NewTodo />
    </AuthCheck>
  );
}
