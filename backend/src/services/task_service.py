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