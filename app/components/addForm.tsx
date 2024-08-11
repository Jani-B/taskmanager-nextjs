"use client";
import { useFormState } from "react-dom";
import { createToDo } from "@/app/actions";

export default function AddForm() {
  const [state, formAction] = useFormState(createToDo, null);

  return (
    <div>
      <h2>Here we make the input </h2>
      <form action={formAction}>
        <input type="text" id="task" name="task"></input>
        <input type="text" id="specfics" name="specifics"></input>
        <button>add</button>
      </form>
    </div>
  );
}
