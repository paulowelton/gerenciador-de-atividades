from pydantic import BaseModel, Field
import uuid

class Task(BaseModel):
    '''
    Model para validar Task
    '''
    id: str = Field(default_factory=lambda: str(uuid.uuid4())) # field serve pra evitar ids duplicados
    title: str
    description: str
    status: str = 'Pendente'

class TaskUpdate(BaseModel):
    '''
    Model para validar Task que irá ser alterada
    '''
    title: str
    description: str
    status: str = 'Pendente'