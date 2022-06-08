import React, {useRef, useContext} from "react";
import {TodosContext} from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) return;

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="text">Isi</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button type="submit">Tambah</button>
        </form>
    )
}

export default NewTodo;