import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { TaskProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // cobrindo o app com meu context para compartilhamento de variveis e funcoes
  <TaskProvider>
    <App />
  </TaskProvider>
);
