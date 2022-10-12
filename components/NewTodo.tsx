import { FormEvent, useContext, useRef } from "react";
import toast from "react-hot-toast";
import { addTask } from "../firebase/task.firestore";
import Task from "../models/Task";
import AuthContext from "../store/auth.context";

export default function NewTodo() {
  const { user } = useContext(AuthContext);

  let titleRef = useRef<HTMLInputElement>(null);
  let descriptionRef = useRef<HTMLInputElement>(null);
  let dueOnRef = useRef<HTMLInputElement>(null);
  const minDate =
    new Date().getFullYear() +
    "-" +
    `0${new Date().getMonth() + 1}`.slice(-2) +
    "-" +
    `0${new Date().getDate()}`.slice(-2);

  function newTask(event: FormEvent) {
    event.preventDefault();

    const task: Task = {
      title: titleRef?.current?.value ?? "",
      description: descriptionRef?.current?.value ?? "",
      complete: false,
      createdAt: new Date(),
      updatedAt: null,
      dueAt: new Date(dueOnRef?.current?.value ?? ""),
      uidUser: user.uid,
    };

    if (task.title.length >= 5 && task.description.length >= 5) {
      addTask(task).then(() => {
        toast.success("Now do it!", {
          icon: "✅",
        });
      });
    }
  }

  return (
    <div className="flex flex-col px-6 py-4 md:w-1/2 md:m-auto">
      <h3 className="mb-4 text-2xl font-semibold">New Task</h3>
    </div>
  );
}
