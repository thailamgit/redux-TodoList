import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { Todo } from "./types";

interface TodoItemProps {
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <input type="checkbox"
            checked={todo.completed} 
            onChange={() => dispatch(toggleTodo(todo.id))}/>

            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delelte</button>
        </div>
    )
}

export default TodoItem