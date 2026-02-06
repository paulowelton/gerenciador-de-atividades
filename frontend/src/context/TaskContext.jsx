import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }){
  const [tasks, setTasks] = useState([]);

  async function loadTasks(){
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const data = await res.json();
    setTasks(data);
  }

  async function addTask({ title, description }){
    await fetch("http://127.0.0.1:8000/tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    loadTasks();
  }

  async function deleteTask(id){
    await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
      method: "DELETE"
    });

    loadTasks();
  }

  async function updateTask(id, data){
    const res = await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "title": data.title,
        "description": data.description,
        "status": data.status
      })
    })

    const dataa = res.json()

    console.log(dataa)

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
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}