import Image from "next/image";
import styles from "./page.module.css";
import ToDoList from "./todolist/page";
import Addtodo from "./addtodo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Tasklist</h1>
        <Addtodo />
      </div>
      <div className={styles.toDoContainer}>
        <h2 className={styles.taskList}>Your Tasks</h2>
        <ToDoList />
      </div>
    </main>
  );
}
