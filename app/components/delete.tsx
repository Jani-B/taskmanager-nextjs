import { deleteToDo } from "../actions";

export const Delete = ({ id }: any): any => {
  return (
    <form action={deleteToDo}>
      <input type="hidden" name="id" value={id}></input>
      <button>X</button>
    </form>
  );
};
