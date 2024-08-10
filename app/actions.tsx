"use server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";

export async function createToDo(prevState: any, formData: FormData) {
  const todofile = await fs.readFile(
    process.cwd() + "/app/datalist/data.json",
    "utf8"
  );
  const data = JSON.parse(todofile);

  let task = "";
  let specifics = "";

  try {
    task = formData.get("task") as string;
    specifics = formData.get("specifics") as string;
    console.log(task);
    console.log(specifics);
  } catch (e) {}

  if (task) {
    if (data.length < 10) {
      let newId = data.length + 1;
      let newStringId = newId.toString();
      console.log(newId);

      data.push({
        id: newId,
        title: task,
        content: specifics,
      });
      let myJsonData = JSON.stringify(data);

      fs.writeFile("app/datalist/data.json", myJsonData);
      revalidatePath("/addtodo"); //lets take us back to the same site so that the content will update.s
    } else {
      let remove = data.length - 2;
      for (let i = 0; i < remove; i++) {
        data.splice(i, 1);
        console.log(remove);
      }
      let myJsonData = JSON.stringify(data);
      fs.writeFile("app/datalist/data.json", myJsonData);
      revalidatePath("/addtodo");
    }
  }

  console.log(data);
  console.log(data[0].id);
}
