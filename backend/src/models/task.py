from fastapi import UploadFile, File, Form
from pydantic import BaseModel, Field
import uuid

class Task(BaseModel):
    '''
    Model para validar Task
    '''
    id: str = Field(default_factory=lambda: str(uuid.uuid4())) # field serve pra evitar ids duplicados gerando um novo a cada req
    title: str = Form(...)
    description: str = Form(...)
    image: UploadFile | None = File(None)
    status: str = 'Pendente'

class TaskUpdate(BaseModel):
    '''
    Model para validar Task que irá ser alterada
    '''
    title: str
    description: str
    status: str = 'Pendente'