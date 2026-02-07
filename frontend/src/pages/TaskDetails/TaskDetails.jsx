import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../../context/TaskContext";
import Swal from "sweetalert2"; 

function TaskDetails() {
  const { id } = useParams();
  const { tasks, deleteTask, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find(task => task.id === id);

  function removeTask(id){
    deleteTask(id);
    navigate("/");
  }

  function changeTask(task) {
    Swal.fire({
      title: "Editar Task",
      html: `
        <input id="title" class="swal2-input" value="${task.title}" style="width: 80%">
        <textarea id="description" class="swal2-textarea" style="width: 80%">${task.description}</textarea>
        <select id="status" class="swal2-select" style="width: 80%">
          <option ${task.status === 'Pendente' ? 'selected' : ''}>Pendente</option>
          <option ${task.status === 'Em andamento' ? 'selected' : ''}>Em andamento</option>
          <option ${task.status === 'Concluido' ? 'selected' : ''}>Concluido</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      confirmButtonColor: "#f4861f",
      preConfirm: async () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const status = document.getElementById("status").value;
        
        try {
          await updateTask(task.id, { title, description, status });
        } catch (error) {
          Swal.showValidationMessage(error.message);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sucesso!", "Task atualizada", "success");
      }
    });
  }

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
        <p className="text-xl font-semibold">Task não encontrada</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-[#f4861f] hover:underline">
          Voltar para a lista
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4 sm:p-8">
      
      <button 
        onClick={() => navigate("/")} 
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-[#f4861f] transition-colors self-start max-w-2xl mx-auto w-full"
      >
        <span>←</span> Voltar para a lista
      </button>

      <div className="bg-white rounded-xl shadow-lg border-l-8 border-[#f4861f] overflow-hidden w-full max-w-2xl">
        <div className="p-6 sm:p-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 w-full">
              {task.title}
            </h2>
            <span className="shrink-0 px-3 py-1 text-xs font-bold uppercase rounded-full bg-orange-100 text-[#f4861f]">
              {task.status}
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-widest">
              Descrição
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
              {task.description}
            </p>
          </div>

          {task.image && (
            <div className="w-full flex justify-center mt-6">
              <img 
                className="max-h-[300px] w-full object-contain rounded-lg" 
                src={task.image} 
                alt="task" 
              />
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
             <button 
                onClick={() => changeTask(task)} 
                className="w-full sm:w-auto cursor-pointer bg-[#f4861f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d67216] transition-all shadow-md"
             >
                Editar Tarefa
             </button>
             <button 
                onClick={() => removeTask(task.id)} 
                className="w-full sm:w-auto cursor-pointer bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-all shadow-md"
             >
                Deletar Tarefa
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;