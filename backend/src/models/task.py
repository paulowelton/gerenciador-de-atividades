from pydantic import BaseModel
import uuid

class Task(BaseModel):
    id: str = str(uuid.uuid4())
    title: str
    description: str
    status: str = 'Em andamento'