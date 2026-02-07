import { Link } from "react-router-dom";
import { useTasks } from "../../../context/TaskContext";

function ListTasks() {
    const { filterStatus, filteredTasks } = useTasks();

    if(filteredTasks == 0){
      return (
        <span className="text-center block">Sem dados de status: {filterStatus}...</span>
      )
    }

    return (
      <div>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#f4861f]">
            <tr className="text-white text-left">
              <th className="px-4 py-3 font-semibold text-center">Título</th>
              <th className="px-4 py-3 font-semibold text-center">Descrição</th>
              <th className="px-4 py-3 font-semibold text-center">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Visualizar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-700 text-center">{task.title}</td>
                <td className="max-w-10 truncate px-4 py-3 text-gray-700 text-center">{task.description}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-[#f4861f]">
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="cursor-pointer bg-[#f4861f] hover:bg-[#d67216] text-white px-4 py-1 rounded shadow-sm transition-all text-sm">
                    <Link to={`/task/${task.id}`}>
                      Visualizar
                    </Link>
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ListTasks;