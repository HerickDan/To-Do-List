
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Box } from './components/Box';
import { Sectionlist } from './components/Section';
import { Task } from './components/Task';

interface TypeTask{
  name: string,
  done: boolean,
  priority: "Medium" | "High" | "low"
}

function App() {
  const [taskList, setTaskList] = useState<{name: string, id: Number}[]>([])
  const[id, setId] = useState(0)
  const buildTask = () =>{
     const name = "herick" 
     setId(Math.floor(Math.random() * 100))
    setTaskList( [...taskList, {name: name, id: id}])
  }

  useEffect(()=>{console.log(taskList)},[])

  return (
    <div className="App">
      <Sectionlist>
        <h1>
          TO DO LIST
        </h1>
        <Box>
          <h2>Danilo</h2>
          {taskList.map((item, key)=>(
            <Task key={id}/>
          ))}
        </Box>
        <button onClick={buildTask}>
          teste
        </button>
      </Sectionlist>
    </div>
  );
}

export default App;
