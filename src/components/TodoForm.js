<<<<<<< HEAD
import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Evita agregar tareas vacías
    addTodo(value); 
    setValue(""); 
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
=======
import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Evita agregar tareas vacías
    addTodo(value); 
    setValue(""); 
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
>>>>>>> ecfdb20a73a852c4209c17679c0b57fe7d59d7a0
