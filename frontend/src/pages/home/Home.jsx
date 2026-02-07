import InsertTask from "./components/InsertTask";
import ListTasks from "./components/ListTasks";
import FiltersTask from "./components/FiltersTask";

function Home() {
  return (
    <div className="w-screen bg-slate-100 flex justify-center items-center">
      <div className="w-[90%] sm:w-[90%] lg:w-[60%] bg-white rounded-2xl p-6 my-5 shadow">
        <InsertTask />
        <FiltersTask/>
        <ListTasks />
      </div>
    </div>
  );
}

export default Home;
