import Home from './pages/home/Home'
import TaskDetails from './pages/TaskDetails/TaskDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return (
    // definindo as rotas da aplicacao
    <BrowserRouter>
      <Routes>
        {/* rota principal onde vai aparecer o componente home*/}
        <Route path="/" element={<Home/>}></Route>
        {/* rota onde vai mostrar os detalhes de uma tarefa */}
        <Route path="/task/:id" element={<TaskDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App