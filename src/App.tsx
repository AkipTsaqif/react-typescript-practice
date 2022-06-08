import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Belajar TypeScript'),
    new Todo('Belajar React'),
  ]

  const addTodoHandler = (text: string) => {
    todos.push(new Todo(text));
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
