import Image from "next/image";
import styles from "./page.module.css";
import ToDoList from "./todolist/page";
import Addtodo from "./addtodo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>To-Do</h1>
        <Addtodo />
      </div>
      <div>
        <h2>Your todos</h2>
        <ToDoList />
      </div>
    </main>
  );
}
