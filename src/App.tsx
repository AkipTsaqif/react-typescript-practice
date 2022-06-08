import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div >
      <Todos todos={['Belajar React', 'Belajar TypeScript']}/>
    </div>
  );
}

export default App;
