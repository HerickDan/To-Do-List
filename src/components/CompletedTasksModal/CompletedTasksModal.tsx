import { Box, Button, Chip } from "@mui/material"

interface ListKeys {
    taskName: string;
    priority: string;
    completed: boolean;
    id: string;
}

interface Props {
    data: ListKeys[];
    clearAll: () => void
}

export const CompletedTasksModal = ({ data, clearAll }: Props) => {


    const getColor = (priority: string) => {
        if (priority === "Alta") return "#fd0810"
        if (priority === "Média") return "#e3ed14"
        return "#4af423"
    };
    return (
        <Box sx={{
            width: "55vh",
            height: "60vh",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems:"center",
            padding: "20px"
        }}>
            <h2>Tarefas cumpridas</h2>
            <Box style={{
                overflow: "auto", width: "100%", height: "80%", border: "solid 1px#b3c9c1",
                borderRadius: "15px"
            }}>
                {data.map((item: { taskName: string, priority: string, completed: boolean }) => {
                    if (item.completed === true) {
                        return (
                            <article className="task">
                                <div>
                                    <label htmlFor="task-1" className="taskName">{item.taskName}</label>
                                </div>
                                <Chip label={item.priority} style={{ backgroundColor: getColor(item.priority) }} />
                            </article>
                        )
                    }
                })}
            </Box>
            <Box>
                <Button onClick={clearAll} >Limpar lista</Button>
                <Button onClick={clearAll}>Fechar</Button>
            </Box>
        </Box>
    )
}