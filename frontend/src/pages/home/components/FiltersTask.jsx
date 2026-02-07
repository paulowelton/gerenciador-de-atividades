import { useTasks } from "../../../context/TaskContext";

function FiltersTask(){
    const { filteredTasks, filterStatus, setFilterStatus} = useTasks();

    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-center items-center gap-2">
                <h1 className="text-2xl font-bold">{filterStatus}</h1>
            </div>
            
            <div className="py-2 flex justify-between">
                <div className="flex gap-2 justify-between">
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