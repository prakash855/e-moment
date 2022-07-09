import React, { useEffect } from "react";
import { useTodos } from "../../context/todos-context";
import style from "../components.module.css";
import Task from "./Task";

const ToDo = () => {
  const {
    showTodo,
    setShowTodo,
    todo,
    setTodo,
    todos,
    setTodos,
    todoContainer,
  } = useTodos();

  useEffect(() => {
    setTodos(localStorage.getItem("todos") || []);
  });
  return (
    <div className={style.toDo}>
      <div onClick={() => setShowTodo(!showTodo)} className={style.todoText}>
        ToDo
      </div>
      {showTodo && (
        <div>
          <input
            onChange={(e) => setTodo(e.target.value)}
            className={style.in}
            type="text"
            value={todo}
            onKeyDown={(e) =>
              e.code === "Enter" && e.code !== "" && todoContainer()
            }
          />
          {/* {todos?.map((item) => (
            <Task key={item} item={item} />
          ))} */}
          {console.log(todos)}
        </div>
      )}
    </div>
  );
};

export default ToDo;
