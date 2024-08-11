"use server";
import { promises as fs } from "fs";
import AddForm from "../components/addForm";

export default async function Addtodo() {
  const todofile = await fs.readFile(
    process.cwd() + "/app/datalist/data.json",
    "utf8"
  );
  const data = await JSON.parse(todofile);

  if (data.length >= 10) {
    return (
      <div>
        <h2>Too many tasks. Please remove few</h2>
      </div>
    );
  } else {
    return (
      <div>
        <AddForm />
      </div>
    );
  }
}

//currently this is working so that it will log in the VS code console the text that you add. See also createToDo action in actions.tsx.
//next step is to get it to add it to the to do list:
