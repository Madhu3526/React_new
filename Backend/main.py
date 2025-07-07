from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

import models
from database import engine
from database import SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SearchQuery(BaseModel):
    query: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "FastAPI with SQLite is working!"}

@app.post("/search")
def search(query: SearchQuery, db: Session = Depends(get_db)):
    # Save the query to DB
    db_query = models.SearchLog(query=query.query)
    db.add(db_query)
    db.commit()
    db.refresh(db_query)
    
    return {"response": f"You searched for: {query.query}"}
