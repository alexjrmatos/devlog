# DevLog

Diário de desenvolvedor com integração ao GitHub. Registre seu dia a dia, vincule commits às entradas e consulte seu histórico de evolução.

## Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite, React Router
- **Infra:** Docker (MongoDB)

## Iniciar o ambiente

```bash
# 1. Docker e MongoDB
sudo service docker start
docker start devlog-mongo

# 2. Backend
cd backend
npm run dev

# 3. Frontend (novo terminal)
cd frontend
npm run dev
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /health | Status da API |
| GET | /entries | Lista entradas |
| GET | /entries?mood=&tag=&search=&start=&end= | Filtra entradas |
| GET | /entries/date/:date | Entradas por data |
| POST | /entries | Cria entrada |
| GET | /entries/:id | Busca entrada |
| PUT | /entries/:id | Atualiza entrada |
| DELETE | /entries/:id | Deleta entrada |
| GET | /commits | Lista commits |
| GET | /commits/sync/:username | Sincroniza com GitHub |
| POST | /commits/link | Vincula commit a entrada |

## Progresso

### Concluído
- [x] Setup WSL 2 + Docker + MongoDB
- [x] Backend com Express e Mongoose
- [x] CRUD de entradas
- [x] Filtros e busca de entradas (mood, tag, texto, data)
- [x] Integração com GitHub API
- [x] Sync de commits por repositório
- [x] Frontend base com React + Vite
- [x] Navegação com React Router
- [x] Página Home listando entradas com cards
- [x] Página Nova Entrada com formulário
- [x] Estilização dark theme

### Próximos passos
- [ ] Seção de commits na interface
- [ ] Vinculação de commits a entradas pela UI
- [ ] Filtros na interface (mood, tag, busca)
- [ ] Deploy
