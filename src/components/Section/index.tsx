import { useState } from "react";
import styled from "styled-components";
import { Task } from "../Task";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ListSection } from "../Box";
import "./style.css";

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
}

export const Sectionlist = () => {
  const [taskList, setTaskList] = useState<
    { name: string; id: Number; priority: string }[]
  >([]);
  const [id, setId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const options = ["Alta", "Média", "Baixa"];

  const buildTask = ({ taskName, priority }: Type) => {
    console.log(taskName, priority);
    setId(Math.floor(Math.random() * 100));
    setTaskList([...taskList, { name: taskName, id: id, priority: priority }]);
    setTaskName("");
    setPriority("");
  };

  const onDelete = (itemId: Number) => {
    console.log(itemId)
    const updatedItems = taskList.filter((item) => item.id !== itemId);
    setTaskList(updatedItems);
  };

  const handleChange = (e: SelectChangeEvent) => {
    setPriority(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Section>
      <h1>TO DO LIST</h1>
      <ListSection>
        <form className="form">
          <TextField
            className="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <Select className="options" onChange={handleChange} value={priority}>
            {options.map((value, key) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            onClick={() => {
              buildTask({ taskName, priority });
            }}
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
