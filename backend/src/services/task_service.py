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