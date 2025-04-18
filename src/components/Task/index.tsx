import { ReactNode } from "react";
import "./style.css";
import { Chip } from "@mui/material";

interface Props{
  id: Number,
  value:string,
  priority: string
}


export const Task = ({id, value, priority}: Props) => {
  return (
    <article className="task" id={id.toString()}>
        <div>
        <input type="radio" id="task-1" name="task" value="Teste" />
        <label htmlFor="task-1">{value}</label>
        <label htmlFor="task-1">{priority}</label>
        </div>
        <Chip label="Clickable"  />
    </article>
  );
};
