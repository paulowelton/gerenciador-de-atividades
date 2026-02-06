import Home from './pages/home/Home'
import TaskDetails from './pages/TaskDetails/TaskDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/task/:id" element={<TaskDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App