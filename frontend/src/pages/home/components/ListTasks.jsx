import { Link } from "react-router-dom";
import { useTasks } from "../../../context/TaskContext";

function ListTasks() {
    // variaveis: filtro e tasks filtradas
    const { filterStatus, filteredTasks } = useTasks();

    // caso nao tenha tasks com o filtro
    if (!filteredTasks || filteredTasks.length === 0) {
      return (
        <span className="text-center block mt-10 text-gray-500 italic">
          Nenhuma tarefa com o status: **{filterStatus}**
        </span>
      );
    }

    return (
      // tabela que lista todas tarefas
      <div className="w-full overflow-hidden rounded-lg shadow-sm border border-gray-200 mt-4">
        <table className="min-w-full border-collapse block md:table">
          {/* cabecalho da tabela */}
          <thead className="hidden md:table-header-group bg-[#f4861f]">
            <tr className="text-white text-left">
              <th className="px-4 py-3 font-semibold text-center">Título</th>
              <th className="px-4 py-3 font-semibold text-center">Descrição</th>
              <th className="px-4 py-3 font-semibold text-center">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Visualizar</th>
            </tr>
          </thead>
          
          {/* corpo da tabela sendo 'tr' a linha e 'td' as celulas */}
          <tbody className="block md:table-row-group divide-y divide-gray-200">
            {filteredTasks.map((task) => (
              <tr 
                key={task.id} 
                className="hover:bg-gray-50 transition-colors block md:table-row p-4 md:p-0"
              >
                <td className="px-4 py-2 md:py-3 text-gray-800 font-bold md:font-normal text-center block md:table-cell">
                  <span className="md:hidden text-xs text-gray-400 block uppercase">Título</span>
                  {task.title}
                </td>

                <td className="px-4 py-2 md:py-3 text-gray-700 text-center block md:table-cell">
                  <span className="md:hidden text-xs text-gray-400 block uppercase">Descrição</span>
                  <div className="max-w-xs mx-auto truncate">
                    {task.description}
                  </div>
                </td>

                <td className="px-4 py-2 md:py-3 text-center block md:table-cell">
                  <span className="md:hidden text-xs text-gray-400 block mb-1 uppercase">Status</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-[#f4861f]">
                    {task.status}
                  </span>
                </td>

                <td className="px-4 py-4 md:py-3 text-center block md:table-cell border-b md:border-none">
                  <Link 
                    to={`/task/${task.id}`}
                    className="inline-block w-full md:w-auto bg-[#f4861f] hover:bg-[#d67216] text-white px-6 py-2 md:py-1 rounded shadow-sm transition-all text-sm font-medium"
                  >
                    Visualizar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ListTasks;