# AI Study Planner 📚

A simple and clean **React-based study planning web application** that helps students organize their subjects and deadlines and generate a structured study schedule.

The application allows users to add subjects, assign deadlines, and automatically generate a smart multi-day study plan.

---

## 🚀 Features

* Add subjects with deadlines
* Automatically generate a structured study plan
* Delete subjects from the list
* Clean and responsive UI built with Tailwind CSS
* Modular React component architecture
* Utility-based plan generation logic
* Architecture ready for **AI integration (Gemini/OpenAI)**

---

## 🧠 How It Works

1. User enters a **subject name** and **deadline**
2. Subjects are stored in React state
3. The app generates a **day-wise study plan**
4. A final day is reserved for **revision and practice**

Example Output:

Day 1
Subject: Data Structures
• Study core concepts
• Practice important questions
• Revise notes

Day 2
Subject: DBMS
• Study core concepts
• Practice important questions
• Revise notes

Final Day
• Revise all subjects
• Practice weak topics
• Attempt mock tests

---

## 🛠 Tech Stack

* **React.js**
* **JavaScript (ES6)**
* **Tailwind CSS**
* **Vite**
* **Component-based architecture**

---

## 📂 Project Structure

src
│
├── components
│   ├── StudyInput.jsx
│   ├── SubjectList.jsx
│   └── StudyPlan.jsx
│
├── utils
│   └── generatePlan.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ai-study-planner.git
```

Go to project folder:

```bash
cd ai-study-planner
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 🔐 Environment Variables (For AI Integration)

If AI generation is enabled, create a `.env` file:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

This ensures API keys remain secure and are not exposed in the source code.

---

## 🤖 Future Improvements

* AI-powered study plan generation using **Google Gemini API**
* Task completion tracking
* Progress bar for study goals
* Authentication and user accounts
* Study reminders

---

## 📌 Learning Outcomes

This project demonstrates:

* React state management
* Component based UI architecture
* Handling lists and events in React
* Modular code organization
* Environment variable usage
* Clean project structuring for scalable apps

---

## 👩‍💻 Author

**Vaishnavi**

Computer Science Student | Aspiring Software Developer
