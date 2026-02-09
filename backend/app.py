from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from src.routes.tasks import router as tasks_router

BASE_DIR = Path(__file__).resolve().parent
UPLOAD_PATH = BASE_DIR / "src" / "uploads"

UPLOAD_PATH.mkdir(parents=True, exist_ok=True)

app = FastAPI()
app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_PATH),
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