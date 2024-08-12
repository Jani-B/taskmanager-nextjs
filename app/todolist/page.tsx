"use server";
import { promises as fs } from "fs";
import { Delete } from "../components/delete";

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
        <ul>
          {datainfo.map((item) => (
            <li key={item.id}>
              {item.title} <Delete id={item.id.toString()} />
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
