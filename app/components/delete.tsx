"use client";
import { deleteToDo } from "../actions";
import { useFormState } from "react-dom";

export const Delete = ({ id }: any): any => {
  const [state, formAction] = useFormState(deleteToDo, null);
  return (
    <form action={formAction}>
      <input type="hidden" name="deleteid" value={id}></input>
      <button type="submit">X</button>
    </form>
  );
};
