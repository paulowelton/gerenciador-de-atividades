import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const data = await res.json();
    setTasks(data);
  }

  async function addTask({ title, description }) {
    await fetch("http://127.0.0.1:8000/tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    loadTasks();
  }

  async function deleteTask(id) {
    await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
      method: "DELETE",
    });

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}