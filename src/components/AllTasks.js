import React from "react";
import { toast } from "react-toastify";

const AllTasks = ({ taskList, setTaskList, task, setTask }) => {
  const editTask = (id) => {
    const individualTask = taskList.find((task) => task.id === id);
    setTask(individualTask);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
    toast.error("Task deleted successfully!");
  };

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </span>
        <span className="clearAll" onClick={() => {setTaskList([]); toast.error("All Tasks cleared successfully!");}}>
          Clear All
        </span>
      </p>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => editTask(todo.id)}
            ></i>
            <i className="bi bi-trash" onClick={() => deleteTask(todo.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllTasks;
