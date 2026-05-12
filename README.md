# Subscription Plan & Checkout UI

A sleek, responsive **Subscription Selection Page** built with HTML, CSS, and vanilla JavaScript. This project features dynamic price switching and a custom checkout success state.

---

## 🚀 Features

* **Dynamic Plan Selection:** Toggle between Annual and Monthly billing with real-time price and description updates.
* **Responsive Design:** Fully optimized for mobile and desktop using CSS Flexbox, Grid, and Media Queries.
* **Checkout Workflow:** Simulates a successful purchase by dynamically updating the DOM to show a success message.
* **Modern UI:** Dark-themed interface with high-contrast accents and smooth hover transitions.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structure for plans and checkout containers.
* **CSS3:** Custom properties (variables), Grid layout, and nesting for clean styling.
* **JavaScript (ES6):** Event listeners, template literals for dynamic HTML injection, and DOM manipulation.

---

## 📂 Project Structure

* `index.html` - The main structure of the subscription page.
* `style.css` - Visual styling, including mobile responsiveness and success state components.
* `script.js` - Logic for plan selection and handling the checkout button click.

---

## 📝 How It Works

1.  **Selection:** When a user selects a plan (Annual or Monthly), the script detects the change and updates the "Total" section summary.
2.  **Checkout:** Clicking the "Checkout" button triggers a function that:
    * Changes the page title.
    * Replaces the selection UI with a **Success Container**.
    * Displays a confirmation checkmark and a "Go Back" button.
3.  **Reset:** The "Go Back" button reloads the page to return the user to the initial selection state.

---

## 📸 Setup

To view the project locally:

1. Clone the repository.
2. Open `index.html` in your preferred browser.
