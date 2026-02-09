import json
import uuid
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "data.json"
UPLOAD_PATH = BASE_DIR / "uploads"
UPLOAD_PATH.mkdir(exist_ok=True, parents=True)

def list_tasks():
    with open(DATA_PATH, "r", encoding="utf-8") as data:
        return json.load(data)
    
def insert_task(title, description, image):
    tasks = list_tasks()

    image_url = ""

    if image:
        filename = f"{uuid.uuid4()}_{image.filename}"
        file_path = UPLOAD_PATH / filename

        with open(file_path, "wb") as f:
            f.write(image.file.read())

        image_url = f"http://127.0.0.1:8000/uploads/{filename}"

    task = {
        "id": str(uuid.uuid4()),
        "title": title,
        "description": description,
        "status": "Pendente",
        "image": image_url
    }

    tasks.append(task)

    with open(DATA_PATH, "w", encoding="utf-8") as data:
        json.dump(tasks, data, ensure_ascii=False, indent=2)

        
def delete_task(id):
    tasks = list_tasks()
    
    tasks_filtered = [task for task in tasks if task["id"] != id]
    
    with open(DATA_PATH, "w") as data:
        json.dump(tasks_filtered, data)

def update_task(id, title=None, description=None, status=None):
    tasks = list_tasks()
    updated = False

    for task in tasks:
        if task["id"] == id:
            if title is not None:
                task["title"] = title
            if description is not None:
                task["description"] = description
            if status is not None:
                task["status"] = status
            updated = True
            break

    if not updated:
        return False

    with open(DATA_PATH, "w") as data:
        json.dump(tasks, data)

    return True