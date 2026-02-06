import { useState, useEffect } from "react"
import ListTasks from "./components/ListTasks";
import InsertTask from "./components/InsertTask";

function App(){
  const [tasks, setTasks] = useState([]);

  function loadTasks() {
    fetch("http://127.0.0.1:8000/tasks/")
    .then(response => response.json())
    .then(data => {
      setTasks(data)
    })
  }

  function addTask({ title, description }){
    fetch("http://127.0.0.1:8000/tasks/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": title,
        "description": description,
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))

    loadTasks()
  }

  function deleteTask(id){
    fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.ok) {
        loadTasks()
      }
    })
    .catch(error => console.log(error))

  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-[60%] rounded-2xl overflow-hidden bg-white shadow-sm">
        <InsertTask insertTask={addTask}/>
        <ListTasks tasks={tasks} removeTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App