import { useState, useEffect } from "react"

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tasks/")
    .then(response => response.json())
    .then(data => {
      setTasks(data)
    })
  })

  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  )
}

export default App