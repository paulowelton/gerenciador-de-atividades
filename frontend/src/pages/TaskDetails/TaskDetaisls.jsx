import { useParams } from "react-router-dom";

function TaskDetails(){
    const { id } = useParams();

    return (
        <h1>Working well {id}</h1>
    )
}

export default TaskDetails;