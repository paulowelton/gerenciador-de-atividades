from fastapi import FastAPI
from src.routes.tasks import router as tasks_router

from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles


app = FastAPI()
app.mount(
    "/uploads",
    StaticFiles(directory="src/uploads"),
    name="uploads"
)

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(tasks_router, prefix="/tasks", tags=["tasks"])