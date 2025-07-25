import "./style.css";
import { Chip } from "@mui/material";
import { useUpdateTaksStatus } from "../customHooks/useUpdateTaskStatus";

interface ListKeys {
  taskName: string;
  priority: string;
  completed:boolean;
  id: string;
}

interface Props {
  data: ListKeys[];
}

export const Task = ({data}: Props) => {
  const getColor = (priority: string) => {
    if (priority === "Alta") return "#fd0810"
    if (priority === "Média") return "#e3ed14"
    return "#4af423";
  };

  const{mutate} = useUpdateTaksStatus()

  return (
    <div>
      {data.map((item, key) => {
        const color = getColor(item.priority);
        if(item.completed === false){
          return (
          <article className="task" key={item.id}>
            <div>
              <label htmlFor="task-1" className="taskName">{item.taskName}</label>
            </div>
            <Chip label={item.priority} sx={{ backgroundColor: color, fontSize:"17px", fontWeight:"500",  }} />
          </article>
          ) 
          }
      })} 
    </div>
  );
};
