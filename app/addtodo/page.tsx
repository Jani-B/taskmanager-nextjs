"use client";
import { useFormState } from "react-dom";
import { createToDo } from "@/app/actions";

export default function Addtodo() {
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

//currently this is working so that it will log in the VS code console the text that you add. See also createToDo action in actions.tsx.
//next step is to get it to add it to the to do list:
