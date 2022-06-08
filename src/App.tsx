import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
