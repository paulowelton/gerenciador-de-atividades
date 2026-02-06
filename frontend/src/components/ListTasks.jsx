function ListTasks({ tasks }) {
    return (
      <div>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#f4861f] text-white text-left">
              <th className="px-4 py-3 font-semibold text-center">Título</th>
              <th className="px-4 py-3 font-semibold text-center">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Visualizar</th>
              <th className="px-4 py-3 font-semibold text-center">Atualizar</th>
              <th className="px-4 py-3 font-semibold text-center">Deletar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-700 text-center">{task.title}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-[#f4861f]">
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="bg-[#f4861f] hover:bg-[#d67216] text-white px-4 py-1 rounded shadow-sm transition-all text-sm">
                    Visualizar
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="bg-[#f4861f] hover:bg-[#d67216] text-white px-4 py-1 rounded shadow-sm transition-all text-sm">
                    Atualizar
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors">
                    Deletar
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