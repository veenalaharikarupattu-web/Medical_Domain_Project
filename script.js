document.addEventListener("DOMContentLoaded", function () {
    const patientId = "PAT-" + Date.now();
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    document.getElementById("patientId").value = patientId;
    document.getElementById("regDate").value = formattedDate;
});

function savePatient(event) {
    event.preventDefault();

    const consent = document.getElementById("consentCheckbox").checked;
    if (!consent) {
        alert("Consent is required to continue");
        return;
    }

    const patient = {
        patientId: document.getElementById("patientId").value,
        registrationDate: document.getElementById("regDate").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value
    };

    localStorage.setItem("patient", JSON.stringify(patient));
    localStorage.setItem("records", JSON.stringify([]));

    window.location.href = "upload.html";
}
