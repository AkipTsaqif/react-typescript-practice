import Todo from '../models/todo';
import TodoItem from './TodoItems';

const Todos: React.FC<{todos: Todo[]}> = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} />
            ))}
        </ul>
    )
}

export default Todos;