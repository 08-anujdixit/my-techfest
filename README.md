# 🎉 TechFest Website

A modern, responsive web application for managing and showcasing our college's **TechFest** events, registrations, and updates.  
Built with the **MERN Stack** – **MongoDB**, **Express**, **React**, and **Node.js**.

---

## 🚀 Features

- 📢 **Event Listings** – Showcase all fest events with details.
- 📝 **Online Registration** – Participants can register directly from the site.
- 📅 **Schedule Page** – Displays event dates and times.
- 📧 **Contact Form** – Easy way to reach the organizing team.
- 🔐 **Admin Panel** – Manage events, registrations, and content.
- 📱 **Responsive Design** – Works on mobile, tablet, and desktop.
- **Other Details** - Other pages like sponsors details, event managing team, organizers, etc.

---

## 🏗️ Tech Stack

### **Frontend**
- React.js
- React Router DOM
- Tailwind CSS
- Axios (for API calls)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- Dotenv (environment variables)

### **Database**
- MongoDB Atlas (Cloud Database)

---

## 📂 Project Structure
techfest-website/                  # React Frontend
│
├── src/
│   ├── assets/             # Images, logos, etc.
│   ├── components/         # Reusable components 
│   ├── pages/      # Pages like Home, Events, Register
│   ├── services/          # API calls
│   ├── App.css
│   ├── App.jsx
│   |—— Custom.css
│   ├── main.jsx
│   └── index.css
│   └── index.html
│── .env                  # (for frontend API base URL)
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js    # (if using Vite for bundling)
│
├── server/                    # Node/Express Backend
│   ├── controllers/           # Logic for routes
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route handlers
│   ├── middlewares/        # (e.g., validation, auth)
│   ├── config/           # DB connection, env setup
│   ├── .env          # Backend secrets (DB_URI, PORT)
│   ├── server.js     # Entry point for Express app
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE