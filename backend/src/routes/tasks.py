from fastapi import APIRouter
from src.models.task import Task, TaskUpdate
from fastapi import Form, File, UploadFile
from src.services.task_service import list_tasks
from src.services.task_service import insert_task
from src.services.task_service import delete_task
from src.services.task_service import update_task

router = APIRouter()

@router.get("/")
def list_tasks_view():
    return list_tasks()

@router.post("/")
def insert_task_view(
    title: str = Form(...),
    description: str = Form(...),
    image: UploadFile = File(None)
):
    insert_task(title, description, image)
    return {"message": "Tarefa foi inserida com sucesso!"}

@router.delete("/{task_id}")
def delete_task_view(task_id: str):
    delete_task(task_id)
    return {"message": "Tarefa deletada com sucesso!"}

@router.put("/{task_id}")
def update_task_route(task_id: str, task: TaskUpdate):
    res = update_task(
        id=task_id,
        title=task.title,
        description=task.description,
        status=task.status
    )

    if not res:
        return {"message": "Houve um erro e sua tarefa não foi atualizada!"}
    
    return {"message": "Tarefa atualizada com sucesso!"}