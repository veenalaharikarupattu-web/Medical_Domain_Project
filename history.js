const patient = JSON.parse(localStorage.getItem("patient"));
document.getElementById("patientInfo").innerHTML = `
    <p><strong>Patient ID:</strong> ${patient.patientId}</p>
    <p><strong>Name:</strong> ${patient.name}</p>
    <p><strong>Age:</strong> ${patient.age}</p>
    <p><strong>Gender:</strong> ${patient.gender}</p>
    <p><strong>Phone:</strong> ${patient.phone}</p>
    <p><strong>Registration Date:</strong> ${patient.registrationDate}</p>
`;

const records = JSON.parse(localStorage.getItem("records") || "[]");
const visitList = document.getElementById("visitList");

if(records.length === 0){
    visitList.innerHTML = "<p>No visits yet.</p>";
} else {
    records.forEach(visit => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "8px";
        div.style.marginBottom = "10px";
        div.innerHTML = `
            <p><strong>Visit ID:</strong> ${visit.visitId}</p>
            <p><strong>Date:</strong> ${visit.date}</p>
            <pre>${visit.text}</pre>
        `;
        visitList.appendChild(div);
    });
}

// Simple AI insights
const insightsDiv = document.getElementById("insights");
if(records.length === 0){
    insightsDiv.innerHTML = "<p>No insights yet.</p>";
} else {
    let meds = {};
    records.forEach(visit => {
        visit.text.split("\n").forEach(line => {
            if(line.toLowerCase().includes("medicine") || line.toLowerCase().includes("meds")) {
                const medLine = line.split(":")[1];
                if(medLine){
                    medLine.split(",").forEach(m => {
                        const name = m.trim();
                        if(name) meds[name] = (meds[name] || 0) + 1;
                    });
                }
            }
        });
    });

    if(Object.keys(meds).length === 0){
        insightsDiv.innerHTML = "<p>No medicine trends detected.</p>";
    } else {
        let html = "<ul>";
        for(const med in meds){
            html += `<li>${med} prescribed ${meds[med]} time(s)</li>`;
        }
        html += "</ul>";
        insightsDiv.innerHTML = html;
    }
}
