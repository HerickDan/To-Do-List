import "./style.css";
import { Chip } from "@mui/material";


interface ListKeys {
  name: string;
  priority: string;
  id: Number
}

interface Props{
  onDelete: (itemId: Number)=>void,
  items: ListKeys[];
}


export const Task = ({onDelete, items}: Props) => {
  return (
    <div>
      {items.map((item, key)=>(
      <article className="task" id={item.id.toString()} key={key}>
        <div>
        <input type="radio" id="task-1" name="task" value="Teste" onClick={()=>onDelete(item.id)} />
        <label htmlFor="task-1">{item.name}</label>
        </div>
        <Chip label={item.priority} />
    </article>
    ))}
    </div>
  );
};
