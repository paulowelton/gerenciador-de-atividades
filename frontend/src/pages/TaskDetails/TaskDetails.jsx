import { useParams } from "react-router-dom";
import { useTasks } from "../../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find(t => t.id === Number(id));

  if (!task) return <p>Task não encontrada</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetails;