"use client";
import { useFormState } from "react-dom";
import { createToDo } from "@/app/actions";
import styles from "./addForm.module.css";
import { useRef } from "react";

export default function AddForm() {
  const [state, formAction] = useFormState(createToDo, null);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form action={formAction} className={styles.addToDoForm}>
        <p>Add new task</p>
        <h3>Task</h3>
        <input
          className={styles.formInput}
          type="text"
          id="task"
          name="task"
          maxLength={25}
        ></input>
        <h3>Description (optional)</h3>
        <input
          className={styles.formInput}
          type="text"
          id="specfics"
          name="specifics"
          maxLength={75}
        ></input>
        <button className={styles.formButton}>Add Task</button>
      </form>
    </div>
  );
}
