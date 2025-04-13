
import './App.css';
import { Box } from './components/Box';
import { Sectionlist } from './components/Section';

function App() {
  return (
    <div className="App">
      <Sectionlist>
        <h1>
          TO DO LIST
        </h1>
        <Box>
          <h2>Danilo</h2>
        </Box>
      </Sectionlist>
    </div>
  );
}

export default App;
