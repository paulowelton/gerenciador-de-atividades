import json
from pathlib import Path

DATA_PATH = Path("src/data/data.json")

def list_tasks():
    with open(DATA_PATH, "r") as data:
        return json.load(data)
    
def insert_task(item):
    tasks = list_tasks()
    tasks.append(item.dict())

    with open(DATA_PATH, "w") as data:
        json.dump(tasks, data)
        
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