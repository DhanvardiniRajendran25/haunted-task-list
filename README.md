# 🎃 Haunted Task List

*A tiny Halloween-themed productivity app built for the **Kiroween Hackathon**.*

**Haunted Task List** is a minimal React + Vite web app where tasks don’t just sit quietly — they **turn haunted if ignored for more than 10 seconds**. The project showcases how **Kiro’s AI-powered development workflow** (vibe coding, specs, and steering) can rapidly scaffold, refine, and polish a complete frontend application.

> 🏆 Built as part of the AWS re:Invent Hackathon

---

## 🚀 Project Overview

This app explores time-based UI behavior in a fun, visual way. Users can add tasks, and each task tracks when it was created. If a task remains unfinished for 10 seconds, it becomes *haunted*, triggering visual animations and a thematic interaction.

The focus of this project is not complexity, but **clarity, speed, and creativity** — demonstrating how AI-assisted development can turn a simple idea into a working product quickly.

---

## 👻 Features

* Add and remove tasks instantly
* Each task tracks its creation time
* After **10 seconds**, tasks become haunted:

  * Orange glow
  * Subtle wobble animation
  * 👻 “Exorcise” action
* Clean, simple Halloween-themed UI
* Fully client-side (no backend, no database)
* Lightweight, fast, and beginner-friendly codebase

---

## 🧠 How the Haunted Logic Works

* Each task stores a `createdAt` timestamp
* A timer checks how long the task has existed
* If `currentTime - createdAt > 10 seconds`, the task enters a *haunted* state
* The haunted state triggers:

  * CSS animations
  * Visual styling changes
  * A different removal interaction

This logic is encapsulated cleanly inside each task component using React hooks.

---

## 🧪 Try It Out

* **Live Demo:** *[https://haunted-task-list.vercel.app/](https://haunted-task-list.vercel.app/)*
* **GitHub Repo:** [https://github.com/DhanvardiniRajendran25/haunted-task-list](https://github.com/DhanvardiniRajendran25/haunted-task-list)

---

## 🛠️ Built With

* **React 18**
* **Vite**
* **JavaScript (ES6+)**
* **CSS (custom animations & styling)**
* **Kiro AI IDE**

### Kiro Features Used

* Vibe Coding
* `.kiro/specs`
* `.kiro/steering`

---

## 🧙 How Kiro Was Used

### 1. Vibe Coding

The application was initially described in natural language. Kiro generated:

* Full React + Vite project structure
* Core components (`App`, `AddTaskForm`, `TaskList`, `TaskCard`)
* Initial CSS styling
* Haunted timing logic and animations

This allowed rapid ideation → implementation with minimal manual setup.

---

### 2. Spec-Driven Development

A structured spec file was added under `.kiro/specs` to formally define:

* App behavior
* Component responsibilities
* Haunted state rules
* UI expectations

This ensured consistency and made the intent of the application explicit.

---

### 3. Steering & Refinement

Steering files guided Kiro toward:

* Simplicity over over-engineering
* Beginner-friendly React patterns
* Clear component boundaries
* A playful Halloween theme

The result is a clean, readable codebase that’s easy to extend.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── AddTaskForm.jsx   # Task input form
│   ├── TaskList.jsx      # Task list renderer
│   └── TaskCard.jsx      # Individual task + haunted logic
├── App.jsx               # Global state & orchestration
├── main.jsx              # React entry point
├── App.css               # App-level styles
└── index.css             # Global styles
```

---

## ▶️ Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🔮 Future Enhancements

* Persist tasks using LocalStorage or a backend
* Countdown indicator before a task becomes haunted
* Completed vs haunted task states
* Global timer optimization for large task lists
* Theme toggle (Halloween / normal mode)

---

## 🏁 Hackathon Context

This project was built as part of the **Kiroween Hackathon**, focusing on:

* AI-assisted rapid development
* Clear, spec-driven workflows
* Creative UX ideas
* Maintainable frontend architecture

---

## 📄 License

This project is open-source and intended for educational and demonstration purposes.

---
