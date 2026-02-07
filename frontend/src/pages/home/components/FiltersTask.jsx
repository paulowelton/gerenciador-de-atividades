import { useTasks } from "../../../context/TaskContext";

function FiltersTask(){
    const { filteredTasks, filterStatus, setFilterStatus} = useTasks();

    return (
        <div className="w-full flex flex-col">
            <div className="text-center text-2xl font-bold">
                <h1>{filterStatus}</h1>
            </div>
            
            <div className="py-2 flex justify-between">
                <div className="w-[60%] flex justify-between">
                    <button onClick={() =>  setFilterStatus("Todos")} className="cursor-pointer py-0.5 px-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all">
                        Todos
                    </button>
                    <button onClick={() =>  setFilterStatus("Pendente")} className="cursor-pointer py-0.5 px-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all">
                        Pendente
                    </button>
                    <button onClick={() =>  setFilterStatus("Em andamento")} className="cursor-pointer py-0.5 px-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all">
                        Em andamento
                    </button>
                    <button onClick={() =>  setFilterStatus("Concluido")} className="cursor-pointer py-0.5 px-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all">
                        Concluido
                    </button>
                </div>

                <div>
                    <span className="font-bold">Quantidade: {filteredTasks.length}</span>
                </div>
            </div>
        </div>
    )
}

export default FiltersTask;