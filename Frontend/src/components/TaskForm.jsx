import React, { useState } from "react";
import "../App.css";
function TaskForm() {
  const [title, setTitle] = useState();
  const [descreption, setDescreption] = useState();
  const [date, setDate] = useState();
  const HandleTask = (e) => {
    e.preventDefault();
    const task = {
      title: title,
      descreption: descreption,
      date: date,
    };
    console.log(task);
  };
  return (
    <form onSubmit={HandleTask} className="task-form">
      <div className="header-task-form">
        <h1>Create new task</h1>
      </div>
      <div className="input-task-form">
        <input
          type="text"
          className="input-Task"
          placeholder="Enter Task Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="input-Task"
          placeholder="Enter Task descreption"
          onChange={(e) => {
            setDescreption(e.target.value);
          }}
        />
        <input
          type="date"
          className="input-Task"
          placeholder="Enter Task time"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="btn-task-form">
        <button type="submit">Create Taks</button>
      </div>
    </form>
  );
}

export default TaskForm;
