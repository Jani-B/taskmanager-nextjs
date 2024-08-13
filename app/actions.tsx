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
    //console.log(task);
    //console.log(specifics);
  } catch (error: any) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }

  if (task) {
    if (data.length < 10) {
      let getlastelement = data[data.length - 1];
      let newId = getlastelement.id + 1;

      data.push({
        id: newId,
        title: task,
        content: specifics,
      });
      let myJsonData = JSON.stringify(data);

      fs.writeFile("app/datalist/data.json", myJsonData);
      revalidatePath("/"); //lets take us back to the same site so that the content will update.s
    }
  }
}

export async function deleteToDo(prevState: any, formData: FormData) {
  const todofile = await fs.readFile(
    process.cwd() + "/app/datalist/data.json",
    "utf8"
  );
  const data = await JSON.parse(todofile);
  let id: any;
  try {
    id = formData.get("deleteid");
  } catch (e) {
    console.log(e);
  }

  const filtered = data.filter((num: any) => num.id != id);
  //data.splice(id, 1);

  let myJsonData = JSON.stringify(filtered);
  fs.writeFile("app/datalist/data.json", myJsonData);
  revalidatePath("/");
}
