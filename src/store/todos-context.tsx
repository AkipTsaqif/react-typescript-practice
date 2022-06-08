import Todo from "../models/todo";
import React from "react";

type TodosContextObj = { todos: Todo[]; addTodo: (text: string) => void; removeTodo: (id: number) => void }
type Props = { children: React.ReactNode }

export const TodosContext = React.createContext<TodosContextObj>({
    todos: [],
    addTodo: () => {},
    removeTodo: (id: number) => {}
});

const TodosContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  }

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

    const value: TodosContextObj = {
        todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={value}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;