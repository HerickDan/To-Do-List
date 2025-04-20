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
  const getColor = (priority: string) => {
    if (priority === "Alta") return "red";
    if (priority === "Média") return "yellow";
    return "green";
  };

  return (
    <div>
      {items.map((item, key) => {
        const color = getColor(item.priority);
        return (
          <article className="task" id={item.id.toString()} key={key}>
            <div>
              <input
                type="radio"
                id="task-1"
                name="task"
                value="Teste"
                onClick={() => onDelete(item.id)}
              />
              <label htmlFor="task-1">{item.name}</label>
            </div>
            <Chip label={item.priority} sx={{ backgroundColor: color }} />
          </article>
        );
      })}
    </div>
  );
};
