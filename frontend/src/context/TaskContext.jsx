import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }){
  const [tasks, setTasks] = useState([]); //todas as tarefas
  const [filterStatus, setFilterStatus] = useState("Todos"); // filtro
  const filteredTasks = filterStatus == "Todos" ? tasks : tasks.filter(task => task.status == filterStatus) //tarefas filtradas

  // funcao que consome a api de carregas todas as tasks
  async function loadTasks(){
    const res = await fetch("http://127.0.0.1:8000/tasks/");
    const data = await res.json();
    setTasks(data);
  }

  // funcao que adiciona uma nova task a base de dados
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

    loadTasks();
  }

  //  funcao que deleta uma tarefa da base de dados
  async function deleteTask(id){
    await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
      method: "DELETE"
    });

    loadTasks();
  }

  // funcao que edita uma tarefa pelo o ID dela
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

  // carregando tarefas quando o app é iniciado
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      // variaveis e funcoes que vao ser usadas em outros components
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