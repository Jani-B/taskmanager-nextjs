"use server";
import { promises as fs } from "fs";
import { Delete } from "../components/delete";
import styles from "./page.module.css";

export default async function ToDoList() {
  const todofile = await fs.readFile(
    process.cwd() + "/app/datalist/data.json",
    "utf8"
  );
  const data = JSON.parse(todofile);

  let datainfo = [];
  for (let i = 0; i < data.length; i++) {
    datainfo.push(data[i]);
  }

  if (datainfo.length > 0) {
    return (
      <div>
        <ul className={styles.listContainer}>
          {datainfo.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <div>
                <p className={`${styles.listTask} ${styles.titleTask}`}>
                  {item.title}{" "}
                </p>
                <p className={styles.listTask}>{item.content} </p>
              </div>
              <div className={styles.deleteButtonContainer}>
                <Delete id={item.id.toString()} />
              </div>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    );
  } else {
    return <div>No current Tasks</div>;
  }
}
