from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("invoice_match_model.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]
    probability = model.predict_proba(df).max()

    return jsonify(
        {
            "match_result": "MATCH" if prediction == 1 else "NO MATCH",
            "confidence": float(probability),
        }
    )


@app.route("/")
def home():
    return "Invoice Matching API is running!"


if __name__ == "__main__":
    app.run(debug=True)
