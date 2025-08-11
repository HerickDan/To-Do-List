import { useEffect, useState } from "react";
import styled from "styled-components";
import { Task } from "../Task";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ListSection } from "../Box";
import "./style.css";
import { useGetTasks } from "../customHooks/useGetTasks";
import { useCreateTask } from "../customHooks/useMutation";
import { CompletedTasksModal } from "../CompletedTasksModal/CompletedTasksModal";
import { useDeleteAll } from "../customHooks/useDeleteAll";


const Section = styled.section`
    width: 100vw;  
    height: 100vh;
    background-color: #ffff;
    position: absolute;
    display: flex;
    align-items:center;
    flex-direction: column;
    overlfow-y:auto;
`;

interface Type {
  taskName: string;
  priority: string;
  event: any
}

export const Sectionlist = () => {
  const [taskName, setTaskName] = useState("")
  const [priority, setPriority] = useState("");
  const options = ["Alta", "Média", "Baixa"];
  const [show, setShow] = useState<boolean>()
  const [open, setOpen] = useState(false)

  const { data } = useGetTasks()
  const { mutate } = useCreateTask()
  const { mutate: mutateDelete } = useDeleteAll()
  const buildTask = ({ taskName, priority, event }: Type) => {
    event.preventDefault()
    mutate({ taskName: taskName, priority: priority })
  };

  const handleChange = (e: SelectChangeEvent) => {
    setPriority(e.target.value);
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const clearAll = () =>{setOpen(false)}
  useEffect(() => {
    if (data?.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [data])



  return (
    <Section>
      <h1>TO DO LIST</h1>
      <ListSection>
        <form className="form" onSubmit={(event) => buildTask({ taskName, priority, event })}>
          <TextField
            className="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            required={true}
            placeholder="Digite sua tarefa"
          />
          <FormControl className="options">
            <InputLabel htmlFor="prioridade">
              Prioridade
            </InputLabel>
            <Select id="prioridade" onChange={handleChange} value={priority} required label="prioridade">
              {options.map((value, key) => (
                <MenuItem key={key} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
          >
            Adicionar
          </Button>
        </form>
        <Box className="tasksBox" overflow="auto">
          {data ? (
            <Task data={data} />
          ) : null}
        </Box>
        {show ?
          <>
            <Button
              variant="contained"
              sx={{ marginTop: '2%' }}
              onClick={handleOpen}
            >
              Ver lista completa
            </Button>
            <Modal open={open} onClose={handleClose || clearAll} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
             <CompletedTasksModal data={data} clearAll={mutateDelete}/>
            </Modal>
          </>
          : null}
      </ListSection>
    </Section>
  );
};

