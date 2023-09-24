import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  const LOCAL_STORAGE_KEY = { todo: "todo", theme: "theme" };

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.todo)) || []
  );
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.theme)) || "dark"
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.todo, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.theme, JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="App container">
      <ToastContainer />
        <Header theme={theme} setTheme={setTheme} />
        <AddTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <AllTasks
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
    </div>
  );
}

export default App;
