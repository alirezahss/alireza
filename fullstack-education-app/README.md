# Full-Stack Education App (React + Express + SQLite)

This project is intentionally small and heavily commented so you can **learn how all layers work together**.

## Architecture at a glance

1. **React Frontend** (`frontend/`)
   - Renders the UI.
   - Stores temporary UI data in React state.
   - Sends HTTP requests to the backend API.
2. **Express Backend** (`backend/`)
   - Exposes API endpoints like `GET /api/lessons`.
   - Validates request data.
   - Runs SQL queries against SQLite.
3. **SQLite Database** (`backend/education.db`)
   - Persists rows in the `lessons` table.
   - Survives server restarts because it is file-based.

## Request/response data flow

- You submit the React form.
- React sends `POST /api/lessons` with JSON.
- Express receives the JSON, inserts a SQL row, then returns the created row as JSON.
- React receives the response and updates its `lessons` state.
- The component re-renders and you see the new item.

## Run it locally

Open two terminals from `fullstack-education-app/`:

### Terminal A - backend

```bash
cd backend
npm install
npm start
```

Backend runs at `http://localhost:4000`.

### Terminal B - frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

## API endpoints

- `GET /api/health` - quick status check
- `GET /api/lessons` - list all lessons
- `POST /api/lessons` - create a lesson
- `PUT /api/lessons/:id/toggle` - toggle completed state
- `DELETE /api/lessons/:id` - delete lesson

## Suggested learning exercise

1. Add a new column (for example `category`) to the SQL table.
2. Update `POST` and `GET` routes to include it.
3. Update React form and list UI to send/show it.

Doing this once teaches the real-world workflow of syncing **database schema ↔ API contract ↔ frontend UI**.
