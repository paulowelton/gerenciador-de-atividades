import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }){
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("Todos");
  const filteredTasks = filterStatus == "Todos" ? tasks : tasks.filter(task => task.status == filterStatus)

  async function loadTasks(){
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const data = await res.json();
    setTasks(data);
  }

  async function addTask({ title, description, image }){
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if(image){
      formData.append("image", image);
    }
    const res = await fetch("http://127.0.0.1:8000/tasks/", {
      method: "POST",
      body: formData
    });

    console.log(await res.json())
    
    console.log(formData)

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

    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filterStatus,
        filteredTasks,
        setFilterStatus,
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