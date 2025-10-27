# 📡 CCNA Study Dashboard & Practice Test

A clean, responsive, and fully offline-capable **CCNA 200-301 Study Dashboard** and **Practice Test system** built entirely with HTML, CSS, and JavaScript.

Hosted easily on **GitHub Pages**, this project lets you:
- Track your CCNA practice test performance.
- Review weak areas by topic.
- Run self-assessments in *Study* or *Exam* mode.
- See your progress visually through charts and KPIs.
- Sync test results between the **Dashboard** and **Practice Test** automatically via browser storage.

---

## 🚀 Live Demo (after publishing)

Once you enable GitHub Pages, your live dashboard will be accessible at:

https://elspaniard97.github.io/ccna-practice-dashboard/

yaml
Copy code

Replace `<your-username>` with your actual GitHub username.

---

## 🧭 Project Overview

| Page | Purpose |
|------|----------|
| **index.html** | Main dashboard showing KPIs, charts, and study recommendations |
| **questions.html** | Full CCNA Practice Test interface with Study/Exam modes |
| **questions-data.js** | Imports and compiles all section question files |
| **/sections/** | Contains modular JS files for each CCNA topic (30 questions each) |

---

## 🧩 Folder Structure

ccna-practice-dashboard/
│
├── index.html # Dashboard (main entry)
├── questions.html # Practice Test interface
├── questions-data.js # Aggregator importing all 6 CCNA sections
│
└── sections/ # Modular data files (each exports 30 questions)
├── fundamentals.js
├── network-access.js
├── ip-connectivity.js
├── ip-services.js
├── security.js
└── automation.js

markdown
Copy code

---

## ⚙️ Setup (GitHub GUI Method)

1. **Create a new repo** at [https://github.com/new](https://github.com/new)
   - Name it: `ccna-practice-dashboard`
   - Choose **Public**
   - Click **Create Repository**

2. **Upload files**
   - Use **Add File → Upload Files**
   - Upload all files/folders from this project.

3. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Under **Source**, select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**
   - Wait 1–2 minutes, then open the published URL shown by GitHub.

---

## 💾 Browser Data (Local Storage)

All test data is saved in your browser’s storage under:

ccna_results_v1

yaml
Copy code

- View progress in the **Dashboard**
- Clear results via the “Clear All Data” button
- Results sync automatically after each test (no server needed)

---

## 🧠 Study Modes

### 🧩 Study Mode
- Shows correct/wrong answers immediately.
- Displays explanations for every question.
- Ideal for learning phase.

### 🧪 Exam Mode
- Hides answers until test submission.
- Provides realistic timed exam simulation.
- Score saved to the dashboard after finishing.

---

## 📊 Dashboard Features

- Total Tests Taken  
- Average Score  
- Best & Weakest Section  
- Score Trend Line Chart  
- Accuracy by Section (bar chart)  
- Recommended Study Areas (auto-generated)  
- Recent Attempts Table  

---

## 🧩 Updating or Adding Questions

To edit question data:

1. Open the corresponding file under `/sections/`  
   e.g., `sections/fundamentals.js`
2. Each file must export an object like:

```js
export const FUNDAMENTALS = {
  id: 'fund',
  title: 'Network Fundamentals',
  items: [
    { 
      q: 'Which layer of the OSI model is responsible for logical addressing?', 
      options: ['Data Link','Network','Transport','Session'], 
      answer: 1, 
      explanation: 'The Network layer (Layer 3) handles IP addressing and routing.'
    },
    ...
  ]
};
Commit and push changes — GitHub Pages will auto-update.

🧰 Local Development (Optional)
If you test locally on your computer:

Use a local HTTP server (not file://) because ES Modules need proper paths.

bash
Copy code
python3 -m http.server 8080
Visit http://localhost:8080/ to run.

💡 Tips
✅ Works fully offline after first load.

🔒 No backend required — all data is local.

🎯 Best viewed on desktop or tablet.

🧹 Use “Clear All Data” in the Dashboard to reset.

🧾 License
This project is open for personal or educational use under the MIT License.

👨‍💻 Created by:
Ezekiel Correa
CCNA Study Dashboard — 2025 Edition
Powered by ChatGPT & GitHub Pages

vbnet
Copy code

---

✅ **What to do next:**
1. Save this file as **`README.md`** in your repo root.  
2. Commit and push to GitHub.  
3. GitHub will automatically render this as your main project page.

Would you like me to also generate a short **GitHub Pages banner image** (modern CCNA-style, dark background, blue neon text “CCNA Dashboard”)?  
It would look great at the top of your README.




