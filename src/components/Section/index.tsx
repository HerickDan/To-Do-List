import { ReactEventHandler, useEffect, useState } from "react";
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
import { useCreateTask } from "../customHooks/useMutation";
import { useGetTasks } from "../customHooks/useGetTasks";

const Section = styled.section`
    width: 100vw;  
    height: 100vh;
    background-color: #ffff;
    position: absolute;
    display: flex;
    align-items:center;
    flex-direction: column;
    padding;
    overlfow-y:auto;
`;

interface Type {
  taskName: string;
  priority: string;
  event: any
}

export const Sectionlist = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const options = ["Alta", "Média", "Baixa"];
  const {data} = useGetTasks()
  const {mutate} = useCreateTask()

  const buildTask = ({ taskName, priority, event }: Type) => {
    event.preventDefault()
      mutate({taskName: taskName, priority: priority})
  };

  const handleChange = (e: SelectChangeEvent) => {
    setPriority(e.target.value);
  }

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
        <Box className="tasksBox" overflow="auto">
          {data? (
            <Task data={data} />
          ): null}
        </Box>
      </ListSection>
    </Section>
  );
};
