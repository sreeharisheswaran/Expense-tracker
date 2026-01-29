# 💸 Glassmorphism Expense Tracker

A modern, responsive personal finance application built with **Vanilla JavaScript**, featuring a sleek dark-mode glassmorphism UI. Track your income and expenses, categorize transactions, and persist your data locally.

## ✨ Features

* **Real-time Balance:** Automatically calculates total balance as you add or remove items.
* **Transaction Categorization:** Tag entries as Food, Salary, Shopping, or Bills.
* **Smart Filtering:** Quickly toggle between "All", "Income", and "Expenses" views.
* **Data Persistence:** Uses `localStorage` to ensure your data stays on your device even after refreshing the page.
* **Visual Indicators:** Color-coded borders (Green for income, Red for expenses) for instant recognition.
* **Glassmorphism UI:** Aesthetic design using CSS backdrop filters, gradients, and a vibrant pink/purple neon palette.

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser (Chrome, Firefox, Edge, or Safari).

### Installation
1.  Clone the repository or download the source code.
2.  Ensure your file structure looks like this:
    ```text
    ├── index.html
    ├── style.css
    └── script.js
    ```
3.  Open `index.html` in your browser.

## 🛠️ Usage

1.  **Add a Transaction:** Enter a description and an amount. 
    * *Note:* Use **positive numbers** for income and **negative numbers** (e.g., -500) for expenses.
2.  **Select Category:** Choose the most relevant tag from the dropdown.
3.  **Filter:** Use the toggle buttons above the history list to filter your view.
4.  **Delete:** Click the `×` button on any transaction to remove it permanently.

## 🎨 Design Details

* **Font:** 'Inter' (System fallback)
* **Primary Colors:** * Pink: `#FF0066`
    * Purple: `#6A0066`
    * Background: Deep Space Gradient (`#0f0c29` → `#24243e`)
* **Blur Effect:** `backdrop-filter: blur(15px)` for that frosted glass look.

## 📜 Technical Overview

* **Logic:** Managed via Vanilla JS event delegation and array methods (`filter`, `push`).
* **Storage:** Data is serialized to JSON strings and stored in the browser's `localStorage` under the key `txns`.
* **State Management:** A global `filter` variable and `transactions` array drive the UI updates through a central `updateUI()` function.

---
Made with ❤️ for better financial tracking.