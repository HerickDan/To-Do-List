import { Box, Button, Chip } from "@mui/material"

interface ListKeys {
  taskName: string;
  priority: string;
  completed:boolean;
  id: string;
}

interface Props {
  data: ListKeys[];
  clearAll: () => void
}

export const CompletedTasksModal = ({data, clearAll}:Props) => {
    return (
        <Box sx={{width:"50vh", height:"50vh", backgroundColor:"white"}}>
            {data.map((item: { taskName: string, priority: string, completed: boolean }) => {
                if (item.completed === true) {
                    return (
                    <article className="task" >
                        <div>
                            <input
                                type="checkbox"
                                id="task-1"
                                name="task"
                            />
                            <label htmlFor="task-1" className="taskName">{item.taskName}</label>
                        </div>
                        <Chip label={item.priority}/>
                    </article>
                    )
                }
            })}
            <Button  onClick={clearAll} >Limpar lista</Button>
            <Button  onClick={clearAll}>Fechar</Button>
        </Box>
    )
}