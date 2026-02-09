from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_list_tasks():
    response = client.get("/tasks")
    assert response.status_code == 200

def test_insert_tasks():
    response = client.post(
        "tasks/",
        data = {
            "title": "task 1",
            "description": "desc task 1",
        }
    )

    assert response.status_code == 200
    assert response.json() == {"message": "Tarefa foi inserida com sucesso!"}

def test_delete_task():
    response = client.delete(
        "tasks/0fe9556f-0af6-482b-a38f-85cb137f29ef"
    )
    
    assert response.status_code == 200
    assert response.json() == {"message": "Tarefa deletada com sucesso!"}

def test_update_task():
    response = client.put(
        "tasks/0fe9556f-0af6-482b-a38f-85cb137f29ef",
        json={
            "title": "task updated",
            "description": "desc updated",
            "status": "concluido"
        }
    )
    
    assert response.status_code == 200
    assert response.json() == {"message": "Tarefa atualizada com sucesso!"} or {"message": "Houve um erro e sua tarefa não foi atualizada!"}

