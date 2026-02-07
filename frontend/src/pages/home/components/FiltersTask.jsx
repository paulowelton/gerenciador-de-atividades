import { useTasks } from "../../../context/TaskContext";

function FiltersTask() {
    // varaveis do context: tasks filtradas, filtro e set do filtros
    const { filteredTasks, filterStatus, setFilterStatus } = useTasks();

    // Estilo base para os botões para evitar repetição
    const btnStyle = "cursor-pointer py-1.5 px-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-all text-sm sm:text-base";

    return (
        <div className="w-full flex flex-col px-4 sm:px-0">
            {/* nome do filtro */}
            <div className="flex justify-center items-center gap-2 mt-6">
                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                    {filterStatus}
                </h1>
            </div>
            
            {/* botoes que setam um novo filtro na variavel filtro que fica no context e as quantidades */}
            <div className="py-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <button onClick={() => setFilterStatus("Todos")} className={btnStyle}>
                        Todos
                    </button>
                    <button onClick={() => setFilterStatus("Pendente")} className={btnStyle}>
                        Pendente
                    </button>
                    <button onClick={() => setFilterStatus("Em andamento")} className={btnStyle}>
                        Andamento
                    </button>
                    <button onClick={() => setFilterStatus("Concluido")} className={btnStyle}>
                        Concluído
                    </button>
                </div>

                <div className="text-center sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="font-bold text-gray-700">
                        Quantidade: <span className="text-amber-700">{filteredTasks.length}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FiltersTask;