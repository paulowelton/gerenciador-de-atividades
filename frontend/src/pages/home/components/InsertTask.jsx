import { useState } from "react";
import { useTasks } from "../../../context/TaskContext";

function InsertTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const { addTask } = useTasks();
    
    function handleInsertTask(e){
        e.preventDefault() // isso aqui é pro formulario nao renderizar a pagina

        if (!title || !description){
            return
        }

        addTask({
            title,
            description,
            image
        })

        setTitle("");
        setDescription("");
        setImage("");
    }

    return (
        <div>
            <h2 className="text-xl text-center font-bold text-gray-800 mb-4">Adicionar Tarefa</h2>
            
            <form onSubmit={handleInsertTask} className="flex flex-col gap-4" >
                <div>
                <label className="text-sm font-medium text-gray-700 mb-1">Título</label>
                <input 
                    type="text" 
                    placeholder="O que precisa ser feito?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4861f] focus:border-[#f4861f] outline-none transition-all"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea 
                    placeholder="Detalhes da tarefa..."
                    rows="3"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f4861f] focus:border-[#f4861f] outline-none transition-all resize-none"
                ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imagem:</label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-lg"/>
                </div>

                <input 
                type="submit" 
                value="Adicionar Tarefa" 
                className="w-full bg-[#f4861f] hover:bg-[#d67216] text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-colors shadow-sm"
                />
            </form>
        </div>
    )
}

export default InsertTask;