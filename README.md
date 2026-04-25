# DevLog

Diário de desenvolvedor com integração ao GitHub. Registre seu dia a dia, vincule commits às entradas e consulte seu histórico de evolução.

## Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite
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
- [x] Integração com GitHub API
- [x] Sync de commits por repositório
- [x] Frontend base com React + Vite
- [x] Página Home listando entradas

### Próximos passos
- [ ] Formulário para criar entradas
- [ ] Seção de commits na interface
- [ ] Vinculação de commits a entradas pela UI
- [ ] Estilização
- [ ] Deploy
