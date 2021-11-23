import React from "react";
import "./Task.css";

const Task = ({ task, toggleComplete }) => {
  return (
    <div className="task">
      <div className="task_container">
        <p
          style={{ textDecoration: task.completed && "line-through" }}
          onClick={() => toggleComplete(task)}
        >
          {task.title}
        </p>
        <button>X</button>
      </div>
    </div>
  );
};

export default Task;
