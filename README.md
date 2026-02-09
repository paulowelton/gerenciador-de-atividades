# gerenciador-de-atividades
Aplicação feita para gerenciar atividades. Nessa aplicação o usuário pode inserir, ver, atualizar e apagar ativiades. Cada atividade contendo titulo descrição e  status (pendente, em andamento e concluido). O projeto vai ser construido em React (Frontend) e FastApi (Backend).

O projeto é composto por:
- Frontend em React + Tailwind CSS
- Backend em FastAPI
- Persistência de dados em JSON

## Funcionalidades
- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Remover tarefas
- Upload de imagem por tarefa
- Filtro por status
- Interface responsiva

## Como rodar a aplicação
### backend:
Crie um ambiente virtual com o venv e o ative
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
Vá para a pasta de backend
```bash
cd backend
```
Intale todas as bibliotecas necessarias que estao no requirements.txt
```bash
pip install -r requirements.txt
```
Inicie o servidor
```bash
fastapi dev app.py
```

### frontend:
Entre na pasta frontend
```bash
cd frontend
```
Instale as bibliotecas necessarias com o NPM
```bash
npm install
```
Inicie o servidor
```bash
npm run dev
```

## Rodando os testes

### Frontend
Entre na pasta frontend:
```bash
cd frontend
```
Execute os teste:
```bash
npm run test
```

### Backend
Entre na pasta backend
```bash
cd backend
```
Execute os testes:
```bash
pytest
```
OBS: para os testes que precisam de ids deve-se passar um id valido que esteja na base de dados