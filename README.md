# Product Comparison App

An interactive and responsive product comparison web application that allows users to browse products, select up to three items, and compare them side-by-side.  
Built using React and modern CSS utilities with a focus on usability and clean UI.

---

##  Objective

The goal of this project is to design and build a user-friendly interface where users can:
- View a list of products
- Select products for comparison
- Compare key attributes in a structured layout
- Manage selections easily

This project is implemented using **static data only** (no backend/API).

---

##  Features

### Product List
- Displays a grid of products (6+ items)
- Each product includes:
  - Name
  - Brand
  - Image
  - Price
  - Key features (battery, screen, camera, etc.)
- "Add to Compare" / "Remove" toggle per product

### Compare Functionality
- Users can select **up to 3 products**
- Comparison view appears only when **2 or more products** are selected
- Side-by-side comparison table
- Visual highlighting of values for better readability

### Compare Management
- Remove individual products from comparison
- Clear all compared products at once

### Bonus Enhancements
- Search bar to filter products by name
- Persist compare selection using `localStorage`
- Light / Dark mode toggle
- Fully responsive layout (desktop & mobile)

---

##  Tech Stack

- **React**
- **Tailwind CSS (v4)**
- **JavaScript (ES6+)**
- **React Icons**

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/product-comparison.git
>>>>>>> 5003db5 (Initial commit - Product comparison app)
