# ProcureMatch AI – AI Procurement Matching Tool

[Live Page](https://laracrofty-boss.github.io/AI_PO_GRN_Matching-/index.html)

## Overview

ProcureMatch AI is an intelligent web application designed to automate the verification of procurement documents. Many organizations rely on manually cross-checking Purchase Orders (PO), Goods Received Notes (GRN), and Invoices—a process that is time-consuming, error-prone, and difficult to scale.  

This tool leverages **machine learning (Random Forest classifier)** to instantly detect whether the quantities in the three documents match or mismatch. The system is split into:

1. **Frontend (Static Website):** A user-friendly interface hosted on GitHub Pages, allowing users to input document quantities and see results instantly. Includes landing pages, demo, system architecture, and project documentation.  
2. **Backend (API on Render):** A Flask-based API that receives the input quantities, processes them through the trained machine learning model, and returns predictions along with confidence levels.  

**Key benefits:**

- Eliminates manual errors in document verification.  
- Reduces processing time from hours to seconds.  
- Provides a scalable solution suitable for small and large organizations.  
- Easily deployable and forkable; frontend can be hosted via GitHub Pages and backend via Render.

**How it works:**

- User inputs PO, GRN, and Invoice quantities on the demo page.  
- The frontend sends a POST request to the backend API.  
- The Random Forest classifier analyzes the data and returns either `MATCH` or `MISMATCH` with a confidence percentage.  
- The result is displayed dynamically on the frontend.  

---

## Key Terms & Abbreviations

- **PO (Purchase Order):** A document issued by a buyer to a seller specifying the types, quantities, and agreed prices for products or services.  
- **GRN (Goods Received Note):** A document created by the receiving department to confirm that the goods delivered match the purchase order.  
- **Invoice:** A bill issued by the supplier to the buyer listing the delivered goods or services and the amount due.  
- **MATCH:** The status returned by the AI when PO, GRN, and Invoice quantities are consistent.  
- **MISMATCH:** The status returned by the AI when the quantities in the PO, GRN, and Invoice do not align.  
- **Random Forest Classifier:** A machine learning algorithm used for classification that combines multiple decision trees to improve prediction accuracy.  
- **Frontend:** The part of the application the user interacts with (HTML, CSS, JavaScript).  
- **Backend:** The server-side part of the application that processes data and runs the AI model (Python Flask API).  
- **GitHub Pages:** A free service to host static websites directly from a GitHub repository.  
- **Render:** A cloud platform used to deploy web services and backend APIs.  


## Features

- **Automated Verification:** Instantly verify procurement documents without manual checking.  
- **AI-Powered Analysis:** Advanced machine learning model detects discrepancies with high accuracy.  
- **Time Saving:** Reduce processing time from hours to seconds.  
- **System Architecture Overview:** Clear separation of frontend and backend for scalability.  

---

## Folder Structure

```

AI_PO_GRN_Matching-/
├── index.html           # Main landing page
├── demo.html            # Demo interface for PO-GRN-Invoice matching
├── about.html           # System architecture & technical details
├── documentation.html   # Project documentation & SDG relevance
├── style.css            # Shared CSS styles
└── assets/              # Optional: images, icons, fonts, etc.

```

---

## Deployment

### Frontend

- Hosted on GitHub Pages.
- Any forked repository can deploy the static site by enabling GitHub Pages from the repository settings (branch: `main` or `docs` folder).  

### Backend

- Hosted on [Render:](https://ai-po-grn-matching-tnuk.onrender.com)
- Accepts JSON payload via POST requests at `/predict`:

```json
{
  "PO_Qty": 100,
  "GRN_Qty": 100,
  "Invoice_Qty": 100
}
````

* Returns a JSON response:

```json
{
  "status": "MATCH",
  "confidence": 0.95
}
```

---

## How to Use

1. Open the deployed site on [GitHub Pages:](https://laracrofty-boss.github.io/AI_PO_GRN_Matching-/index.html)
2. Navigate to **Demo** page.
3. Enter the PO, GRN, and Invoice quantities.
4. Click **Predict Match**.
5. View the result along with confidence percentage.

---

## Technologies Used

* **Frontend:** HTML, CSS (Tailwind), JavaScript
* **Backend:** Python Flask, Random Forest Classifier
* **Hosting:** GitHub Pages (frontend), Render (backend)

---

## Team

- [Teddy Omondi](https://github.com/TeddyO323)
- [Lara Manga](https://github.com/laracrofty-boss)
- [Wafula Simiyu Joely](https://github.com/42105627)

---


