import React from "react";
import style from "../components.module.css";

const Task = ({ item }) => {
  return (
    <div className="task">
      <input
        className={style.todoText}
        type="checkbox"
        id={item}
        name={item}
        value="Bike"
      />
      <label for="task">{item}</label>
    </div>
  );
};

export default Task;
