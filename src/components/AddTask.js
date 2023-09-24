import React from "react";
import { toast } from "react-toastify";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const submitForm = (e) => {
    e.preventDefault();
    if (!task.name) {
      alert("Task cannot be empty!!!");
      return;
    }

    const date = new Date();
    const currTime = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    if (task.id) {
      const updatedTaskList = taskList.map((t) =>
        t.id === task.id
          ? {
              ...task,
              time: currTime,
            }
          : t
      );
      setTaskList(updatedTaskList);
      toast.success("Task updated successfully!");
    } else {
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: currTime,
      };
      setTaskList([...taskList, newTask]);
      toast.success("Task added successfully!");
    }
    setTask({});
  };

  const cancelButton = () => {
    if (task.id)
      return (
        <button className="cancel" onClick={() => setTask({})}>
          Cancel
        </button>
      );
  };

  return (

    <section className="addTask">
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        <button className="add" type="submit">
          {task.id ? "Update" : "Add"}
        </button>
        {cancelButton()}
      </form>
    </section>
  );
};

export default AddTask;
