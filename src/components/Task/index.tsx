import { useEffect, useState } from "react";
import "./style.css";
import { Chip } from "@mui/material";

interface ListKeys {
  name: string;
  priority: string;
  id: Number;
}

interface Props {
  onDelete: (itemId: Number) => void;
  items: ListKeys[];
}

export const Task = ({ onDelete, items }: Props) => {
  const [check, setCheck] = useState(false)
  const getColor = (priority: string) => {
    if (priority === "Alta") return "#fd0810"
    if (priority === "Média") return "#e3ed14"
    return "#4af423";
  };

  return (
    <div>
      {items.map((item, key) => {
        const color = getColor(item.priority);
        return (
          <article className="task" id={item.id.toString()} key={key}>
            <div>
              <input
                type="checkbox"
                id="task-1"
                name="task"
                onClick={() => {onDelete(item.id); setCheck(false)}}
              />
              <label htmlFor="task-1" className="taskName">{item.name}</label>
            </div>
            <Chip label={item.priority} sx={{ backgroundColor: color, fontSize:"17px", fontWeight:"500",  }} />
          </article>
        );
      })}
    </div>
  );
};
