import { useState } from "react";
import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo: React.FC = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        if (text.trim().length){
            dispatch(addTodo(text))
            setText('')
        }
    }

    return (
        <div>
            <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Add a new todo"/>
            <button onClick={handleAddTodo}>Add</button>
        </div> 
    )
}

export default AddTodo