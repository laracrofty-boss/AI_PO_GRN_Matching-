from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = joblib.load("invoice_match_model.pkl")

# Input schema
class POData(BaseModel):
    PO_Qty: int
    GRN_Qty: int
    Invoice_Qty: int

@app.get("/")
def home():
    return {"message": "AI PO-GRN-Invoice Matching API is running"}

@app.post("/predict")
def predict(data: POData):
    df = pd.DataFrame([data.dict()])
    pred = model.predict(df)[0]
    prob = model.predict_proba(df)[0].max()

    status = pred if pred in ["MATCH", "MISMATCH"] else ("MATCH" if pred==1 else "MISMATCH")

    return {"status": status, "confidence": float(prob)}
