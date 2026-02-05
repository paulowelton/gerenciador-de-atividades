import { useState, useEffect } from "react"
import ListTasks from "./components/ListTasks";

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    function loadTasks() {
      fetch("http://127.0.0.1:8000/tasks/")
      .then(response => response.json())
      .then(data => {
        setTasks(data)
      })
    }

    loadTasks()
  })

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <ListTasks tasks={tasks}/>
    </div>
  )
}

export default App