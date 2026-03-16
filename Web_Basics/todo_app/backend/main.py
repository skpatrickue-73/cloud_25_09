# simple todo api with FastAPI + SQLite
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "todos.db"


# --- DB Setup ---

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Ergebnis als dict-ähnliches Objekt
    return conn


def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS todos (
                id        INTEGER PRIMARY KEY AUTOINCREMENT,

                title     TEXT    NOT NULL,
                completed INTEGER NOT NULL DEFAULT 0
            )
        """)
        conn.commit()


init_db()


# --- Pydantic Schemas ---

class TodoCreate(BaseModel):
    title: str

class TodoUpdate(BaseModel):
    title: str | None = None
    completed: bool | None = None


# --- Helper ---

def row_to_dict(row: sqlite3.Row) -> dict:
    d = dict(row)
    d["completed"] = bool(d["completed"])  # 0/1 → False/True
    return d


# --- Endpoints ---

@app.get("/todos")
def get_todos():
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM todos").fetchall()
    return [row_to_dict(r) for r in rows]


@app.post("/todos", status_code=201)
def create_todo(todo: TodoCreate):
    with get_db() as conn:
        cursor = conn.execute(
            "INSERT INTO todos (title, completed) VALUES (?, ?)",
            (todo.title, 0),
        )
        conn.commit()
        new_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM todos WHERE id = ?", (new_id,)).fetchone()
    return row_to_dict(row)


@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, todo: TodoUpdate):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM todos WHERE id = ?", (todo_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Todo not found")

        current = row_to_dict(row)
        new_title = todo.title if todo.title is not None else current["title"]
        new_completed = todo.completed if todo.completed is not None else current["completed"]

        conn.execute(
            "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
            (new_title, int(new_completed), todo_id),
        )
        conn.commit()
        updated = conn.execute("SELECT * FROM todos WHERE id = ?", (todo_id,)).fetchone()
    return row_to_dict(updated)


@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM todos WHERE id = ?", (todo_id,)).fetchone()
        if row is None:
            raise HTTPException(status_code=404, detail="Todo not found")
        conn.execute("DELETE FROM todos WHERE id = ?", (todo_id,))
        conn.commit()
    return {"message": "Todo deleted"}