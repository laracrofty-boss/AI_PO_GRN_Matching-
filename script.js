// Shared JavaScript functions

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Current year for footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('.current-year');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }
});

// Simple form validation example
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}
async function predictMatch() {
    const payload = {
        PO_Qty: parseInt(document.getElementById("po").value),
        GRN_Qty: parseInt(document.getElementById("grn").value),
        Invoice_Qty: parseInt(document.getElementById("invoice").value)
    };

    const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h3>Status: <span style="color:${data.status === 'MATCH' ? 'green' : 'red'}">
            ${data.status}
        </span></h3>
        <p>Confidence: ${ (data.confidence * 100).toFixed(2) }%</p>
    `;
}
