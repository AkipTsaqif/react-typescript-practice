import Todo from '../models/todo';
import TodoItem from './TodoItems';
import styles from './Todos.module.css';

const Todos: React.FC<{todos: Todo[]}> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.todos.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} />
            ))}
        </ul>
    )
}

export default Todos;