import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Task } from "../Task";
import { Box, Button, FormGroup, Menu, MenuItem, Select, TextField } from "@mui/material";
import { FORMERR } from "dns";
import { ListSection } from "../Box";

const Section = styled.section`
    width: 100vw;  
    height: 100vh;
    background-color: blue;
    position: absolute;
    display: flex;
    align-items:center;
    flex-direction: column;
    padding
`;

export const Sectionlist = () => {
  const [taskList, setTaskList] = useState<{ name: string; id: Number }[]>([]);
  const [id, setId] = useState(0);
  const buildTask = () => {
    const name = "herick";
    setId(Math.floor(Math.random() * 100));
    setTaskList([...taskList, { name: name, id: id }]);
  };
  return (
    <Section>
      <h1>TO DO LIST</h1>
      <ListSection>
            <FormGroup>
              <TextField/>
              <Select>
                <MenuItem>
                  Alta
                </MenuItem>
                <MenuItem>
                  Média
                </MenuItem>
                <MenuItem>
                  Baixa
                </MenuItem>
              </Select>
              <Button>
                Adcionar
              </Button>
            </FormGroup>
        {taskList.map((item, key) => (
          <Task key={id} />
        ))}
      </ListSection>
    </Section>
  );
};
