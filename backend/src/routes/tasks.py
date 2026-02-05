from fastapi import APIRouter
from src.models.task import Task
from src.services.task_service import list_tasks
from src.services.task_service import insert_task

router = APIRouter()

@router.get("/")
def list_tasks_view():
    return list_tasks()

@router.post("/")
def insert_task_view(task: Task):
    insert_task(task)
    return {"message": "Tarefa foi inserida com sucesso!"}