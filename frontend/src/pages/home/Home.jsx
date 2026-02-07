import InsertTask from "./components/InsertTask";
import ListTasks from "./components/ListTasks";
import FiltersTask from "./components/FiltersTask";
import { useTasks } from "../../context/TaskContext";

function Home() {
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-[60%] bg-white rounded-2xl p-6 shadow">
        <InsertTask />
        <FiltersTask/>
        <ListTasks />
      </div>
    </div>
  );
}

export default Home;
