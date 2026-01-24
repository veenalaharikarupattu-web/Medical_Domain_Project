# Medical Record System (Hackathon Project)

This is a **browser-based medical record system prototype** built for a hackathon.  
It allows healthcare workers to **digitize patient records** quickly, even in field or resource-limited settings.

---

## Features

- **Patient Registration**  
  - Auto-generated **unique Patient ID**  
  - Auto-captured **registration date**  
  - Basic details: Name, Age, Gender, Phone Number  
  - Patient consent checkbox

- **Medical Document Upload**  
  - Upload images of prescriptions or medical notes  
  - Simulated **OCR extraction** (shows text from uploaded image)  
  - Save visit information locally

- **Patient History & AI Insights**  
  - List all visits with **Visit ID, Date, and Extracted Text**  
  - Simple AI-assisted insights: counts medicine trends over visits  
  - Fully client-side using **LocalStorage** (no backend required)

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Data Storage:** LocalStorage (browser-side)  

---

## How to Use

1. Open **`index.html`** in a web browser  
2. Fill in patient details and check consent  
3. Click **Continue** → opens **`upload.html`**  
4. Upload medical documents (images)  
5. Click **Extract Text** → shows simulated OCR text  
6. Click **Save Visit** to store the record  
7. Click **View Patient History** → opens **`history.html`**  
8. See all visits and AI insights

---

## Project Structure

Medical_Domain_Project/
│
├── index.html          --> Patient Registration
├── upload.html         --> Upload Medical Document
├── history.html        --> Patient History + AI Insights
├── style.css           --> Shared styling for all pages
├── script.js           --> JavaScript for index.html (Patient Registration)
├── upload.js           --> JavaScript for upload.html (OCR simulation + Save Visit)
├── history.js          --> JavaScript for history.html (Display visits + AI insights)
└── README.md           --> Project documentation

---

## Notes

- The system **runs entirely in the browser** — no backend server required  
- Each **Patient ID is unique** and auto-generated  
- All visits are stored in **LocalStorage** and can be viewed anytime  
- The AI insights are simple **trend summaries**, not medical advice  

---

## Optional Improvements

- Implement **real OCR** using libraries like Tesseract.js  
- Add **search or filter** in Patient History  
- Improve UI with icons, colors, or responsive design for mobile  
