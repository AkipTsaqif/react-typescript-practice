import Todo from '../models/todo';
import TodoItem from './TodoItems';
import styles from './Todos.module.css';

const Todos: React.FC<{todos: Todo[], onRemoveTodo: (id: number) => void}> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.todos.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)} />
            ))}
        </ul>
    )
}

export default Todos;