# task manager
This application is designed to manage activities. Users can add, view, update, and delete activities. Each activity includes a title, description, and status (pending, in progress, and completed). The project will be built using React (frontend) and FastAPI (backend).

The project consists of:
- Frontend in React + Tailwind CSS
- Backend in FastAPI
- Data persistence in JSON

## Features
- Create tasks
- List tasks
- Update tasks
- Remove tasks
- Upload images per task
- Filter by status
- Responsive interface

## how to run
### backend:
make a virtual environment
```bash
python -m venv .venv
```
Linux:
```bash
source .venv/bin/activate
```
Windows:
```bash
.venv/Scripts/activate
```
go to backend directory
```bash
cd backend
```
install all libs in requirements.txt
```bash
pip install -r requirements.txt
```
start the server
```bash
fastapi dev app.py
```

### frontend:
go to frontend directory
```bash
cd frontend
```
install all libs using NPM
```bash
npm install
```
start tehe server
```bash
npm run dev
```

## run tests

### Frontend
go to frontend directory
```bash
cd frontend
```
run the tests:
```bash
npm run test
```

### Backend
go to backend directory
```bash
cd backend
```
run tests:
```bash
pytest
```
