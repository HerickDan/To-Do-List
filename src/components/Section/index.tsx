import { ReactEventHandler, useState } from "react";
import styled from "styled-components";
import { Task } from "../Task";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ListSection } from "../Box";
import "./style.css";
import { useMutation, useQuery } from "@tanstack/react-query";

const Section = styled.section`
    width: 100vw;  
    height: 100vh;
    background-color: #ffff;
    position: absolute;
    display: flex;
    align-items:center;
    flex-direction: column;
    padding
`;

interface Type {
  taskName: string;
  priority: string;
  event: any
}

export const Sectionlist = () => {
  const [taskList, setTaskList] = useState<
    { name: string; id: Number; priority: string }[]
  >([]);
  const [id, setId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const options = ["Alta", "Média", "Baixa"];

 const {isPending, mutate, error, data} = useMutation({
    mutationKey:["data"],
    mutationFn: async (postData:{title: string}) => {
    const response = await fetch("http://localhost:8080/api/createTask", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar os dados')
    }

    return response.json()
  }
  })


  const buildTask = ({ taskName, priority, event }: Type) => {
    event.preventDefault()
    setId(Math.floor(Math.random() * 100));
    if(taskList.find(oneTask=>oneTask.name ===taskName)){
        alert("Já existe uma tarefa com esse nome")
    }else{
      setTaskList([...taskList, { name: taskName, id: id, priority: priority }]);
      setTaskName("");
      setPriority("");
      mutate({title: taskName})
    }
  };

  const onDelete = (itemId: Number) => {
    const updatedItems = taskList.filter((item) => item.id !== itemId);
    setTaskList(updatedItems);
  };

  const handleChange = (e: SelectChangeEvent) => {
    setPriority(e.target.value);
  };

  

 

  return (
    <Section>
      <h1>TO DO LIST</h1>
      <ListSection>
        <form className="form" onSubmit={(event)=>buildTask({ taskName, priority, event })}>
          <TextField
            className="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            required ={true}
            placeholder="Digite sua tarefa"
          />
        <FormControl className="options">
          <InputLabel htmlFor="prioridade">
            Prioridade
          </InputLabel>
        <Select  id="prioridade" onChange={handleChange} value={priority} required label="prioridade">
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
            Adcionar
          </Button>
        </form>
        <Box className="tasksBox">
          {taskList.length>0 ? (
            <Task items={taskList} onDelete={onDelete}/>
          ): null}
        </Box>
      </ListSection>
    </Section>
  );
};
