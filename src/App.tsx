import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Sectionlist } from './components/Section';


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Sectionlist/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
