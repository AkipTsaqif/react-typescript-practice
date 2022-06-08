import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Belajar TypeScript'),
    new Todo('Belajar React'),
  ]

  return (
    <div >
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
