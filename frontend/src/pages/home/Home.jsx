import InsertTask from "./components/InsertTask";
import ListTasks from "./components/ListTasks";
import { useTasks } from "../../context/TaskContext";

function Home() {
  const { tasks, addTask, deleteTask } = useTasks();

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-[60%] bg-white rounded-2xl p-6 shadow">
        <InsertTask insertTask={addTask} />
        <ListTasks tasks={tasks} removeTask={deleteTask} />
      </div>
    </div>
  );
}

export default Home;
