import { ReactNode } from "react";
import "./style.css";
import { Chip } from "@mui/material";
export const Task = () => {
  return (
    <article className="task">
        <div>
        <input type="radio" id="task-1" name="task" value="Teste" />
        <label htmlFor="task-1">Teste</label>
        </div>
        <Chip label="Clickable"  />
    </article>
  );
};
