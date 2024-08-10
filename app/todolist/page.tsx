import { promises as fs } from "fs";

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

  console.log(typeof datainfo[2].id);

  return (
    <div>
      <ul>
        {datainfo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        <li>test</li>
      </ul>
    </div>
  );
}
