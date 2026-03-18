# controlled-forms-in-react-lab
Unit3 Lab
# 📚 Reactville Library - Controlled Forms Lab

Welcome to the **Reactville Virtual Library**! This project is a single-page application (SPA) where users can add their favorite books to a virtual bookshelf.

The primary goal of this lab was to master **Controlled Components** and **State Management** in React.

## 🚀 Live Preview
*(Optional: Add your Vercel or Netlify link here)*

## 🧠 Key Concepts Covered

### 1. Controlled Components
In this project, the HTML form elements are synchronized with the React state.
- **Value Binding**: The input value is always driven by the state (`newBook`).
- **onChange Handling**: Every keystroke updates the state, ensuring that React has full control over the form data at all times.

### 2. State Management with Hooks
- **useState**: Used to manage both the array of books and the temporary form input data.
- **Immutability & Spreading**: Used the spread operator (`...`) to update the list of books while maintaining state immutability.



## 🛠️ Features
- **Real-time UI Updates**: New books appear instantly on the bookshelf without requiring a page reload.
- **Dynamic Input Handling**: A single `handleInputChange` function handles multiple input fields (Title and Author) using computed property names.
- **Clean Interface**: Styled with custom CSS to provide a card-based layout for the bookshelf entries.

## 📂 Project Structure
```text
src/
├── components/
│   └── Bookshelf.jsx  <-- Main logic for Form and Display
├── App.jsx            <-- Root component
├── index.css          <-- Layout and Card styling
└── main.jsx           <-- Entry point
