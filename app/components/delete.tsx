"use client";
import { deleteToDo } from "../actions";
import { useFormState } from "react-dom";
import styles from "./delete.module.css"

export const Delete = ({ id }: any): any => {
  const [state, formAction] = useFormState(deleteToDo, null);
  return (
    <form action={formAction}>
      <input type="hidden" name="deleteid" value={id}></input>
      <button className={styles.deleteButton} type="submit">X</button>
    </form>
  );
};
