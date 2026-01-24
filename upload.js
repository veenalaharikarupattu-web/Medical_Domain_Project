function extractText() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Please select a file first!");
        return;
    }

    // Simulated OCR text
    const sampleText = `Patient: ${JSON.parse(localStorage.getItem("patient")).name}
Age: ${JSON.parse(localStorage.getItem("patient")).age}
Symptoms: Fever, Cough
Diagnosis: Common Cold
Medicine: Paracetamol 500mg`;

    document.getElementById("extractedText").value = sampleText;
}

function saveVisit() {
    const text = document.getElementById("extractedText").value.trim();
    if (!text) {
        alert("No text to save!");
        return;
    }

    const records = JSON.parse(localStorage.getItem("records") || "[]");

    const visit = {
        visitId: "VISIT-" + Date.now(),
        date: new Date().toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' }),
        text: text
    };

    records.push(visit);
    localStorage.setItem("records", JSON.stringify(records));

    alert("Visit saved successfully!");
    document.getElementById("extractedText").value = "";
}
