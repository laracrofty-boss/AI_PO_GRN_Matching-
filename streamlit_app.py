import streamlit as st
import joblib
import pandas as pd

# Load the model
model = joblib.load("invoice_match_model.pkl")

st.title("AI Invoice–PO–GRN Matching App")

uploaded_file = st.file_uploader("Upload CSV with invoice/PO/GRN data", type=["csv"])
if uploaded_file:
    data = pd.read_csv(uploaded_file)
    st.write("Preview of your data:")
    st.dataframe(data.head())

    predictions = model.predict(data)  # Adjust according to your model
    st.write("Predictions:")
    st.write(predictions)
