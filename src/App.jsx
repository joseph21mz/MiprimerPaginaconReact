import React, { Fragment, useState, useRef, useEffect} from "react";
import { v4 as uuidv4  } from "uuid";
import { TodoList } from "./Components/TodoList.jsx";
import { Estilos, Profession } from "./Estilos";

const KEY = "todoApp.todos";

export function App() {
    const todoTaskRef  = useRef();
    const [todos, setTodos] =useState([
        { id: 0, task: "todas las tarea Pendientes", completed: false }
    ]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
          setTodos(storedTodos);
        }
      }, []);

      useEffect(() => {                         
        localStorage.setItem(KEY, JSON.stringify(todos));
      }, [todos]);
    
      const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
      };
    

   const handleTodoAdd = () =>{
      const task = todoTaskRef.current.value;
      if ( task === "") return;
     

      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), task, completed: false }];
      });

      todoTaskRef.current.value = null;
      alert("agreadado!");
   };

    const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    alert("Eliminado!");
    
  };


    

                               

    return(
    <Fragment>
        <Profession/>
        <Estilos/>
        <TodoList todos ={ todos } toggleTodo={ toggleTodo } />
        <input className ="mayusculas" ref={todoTaskRef} type="text" placeholder ="Nueva Tarea" />
        <button onClick= { handleTodoAdd }>➕</button>
        <button onClick={ handleClearAll }>🗑️</button>
        <button>✏️</button>
        <div className="div">
         Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
            terminar.
       </div>
       
       
       <h4>hecho por mi</h4>
    </Fragment>      
    );

}