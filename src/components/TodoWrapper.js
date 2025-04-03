import { useState, useEffect } from "react";
import React from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import EditTodoForm from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // Cargar tareas desde LocalStorage al iniciar
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      console.log("Cargando tareas desde LocalStorage:", parsedTodos);
      setTodos(parsedTodos);  // Actualizamos el estado con las tareas de LocalStorage
    } else {
      console.log("No hay tareas en LocalStorage.");
    }
  }, []);  // Esto solo se ejecuta una vez al cargar la página

  // Guardar tareas en LocalStorage cada vez que cambian
  useEffect(() => {
    if (todos.length > 0) {  // Solo guardar si hay tareas
      console.log("Guardando tareas en LocalStorage:", todos);
      localStorage.setItem("todos", JSON.stringify(todos));  // Guardamos las tareas
    }
  }, [todos]);  // Esto se ejecuta cada vez que el estado `todos` cambia

  const addTodo = (todo) => {
    if (!todo.trim()) return;

    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    console.log("Añadiendo nueva tarea:", newTodo);

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      console.log("Actualizando tareas:", updatedTodos);
      return updatedTodos;
    });
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    ));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
