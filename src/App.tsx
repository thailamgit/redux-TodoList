import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
