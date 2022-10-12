import { FormEvent, useContext, useRef } from "react";
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
  }
}
