import AuthCheck from "../../components/AuthCheck";
import Todos from "../../components/Todos";

export default function TodosIndex() {
  return (
    <AuthCheck>
      <Todos />
    </AuthCheck>
  );
}
