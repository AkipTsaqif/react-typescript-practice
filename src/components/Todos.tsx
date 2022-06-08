import TodoItem from './TodoItems';
import styles from './Todos.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={styles.todos}>
            {todosCtx.todos.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)} />
            ))}
        </ul>
    )
}

export default Todos;