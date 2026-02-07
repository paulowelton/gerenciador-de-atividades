import InsertTask from "./components/InsertTask";
import ListTasks from "./components/ListTasks";
import FiltersTask from "./components/FiltersTask";

function Home() {
  return (
    // definindo uma div onde cobre toda a tela
    <div className="w-screen bg-slate-100 flex justify-center items-center">
      {/* div que cria um container que fica no meio da aplicacao */}
      <div className="w-[90%] sm:w-[90%] lg:w-[60%] bg-white rounded-2xl p-6 my-5 shadow">
        {/* component onde mostra um formulario que cria tarefas */}
        <InsertTask />
        {/* component que filtra as tarefas e mostra a quantidade delas */}
        <FiltersTask/>
        {/* componente que lista todas as tasks baseadas no filtro */}
        <ListTasks />
      </div>
    </div>
  );
}

export default Home;
