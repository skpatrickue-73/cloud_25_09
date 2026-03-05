from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

speicher = ["haus", "maus", "laus"]

class Buch(BaseModel):
    titel: str

#### Basic Get Endpunkte
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/buch")
def read_root():
    return {"Hello": "Buch"}

@app.get("/magazin")
def read_root():
    return {"Hello": "Magazin"}

#### Get Endpunkt mit path parameter

@app.get("/items/{item}")
def read_item(item):
    speicher.append(item)
    return {"speicher": speicher}

#### Post Endpunkt mit Pydantic Validierung

@app.post("/items")
def add_book(buch: Buch):
    speicher.append(buch.titel)
    query("SELECT * FROM tabelle WHERE filter = 'string' ORDER BY ASC;")
    return {"message": speicher}