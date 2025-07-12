# 📝 Blogify - Full-Stack Blogging Platform 🚀  
A feature-rich blogging platform built using Node.js, Express, MongoDB, and EJS. Allows users to write, manage, and engage with blog posts – all with secure auth and a dynamic UI.

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Web%20Framework-yellow)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-success)
![EJS](https://img.shields.io/badge/EJS-Templating-orange)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-ff69b4)

---

## 📌 Overview

A full-stack **Blog Application** that supports:

- ✍️ Creating and managing blog posts
- 💬 Commenting on posts
- 🔐 Secure user registration/login
- 🧑‍💻 User profile management
- 📄 Dynamic pages with EJS rendering

---

## ✨ Features

- ✅ User Authentication (JWT-based)
- ✅ Blog CRUD operations
- ✅ Comments support
- ✅ EJS-based clean and responsive UI
- ✅ Mongoose-based MongoDB integration
- ✅ Middleware-based route protection
- ✅ Auto server reload with **nodemon**

---

## 🧰 Tech Stack

| Tech        | Role                              |
|-------------|-----------------------------------|
| **Node.js** | Backend runtime                   |
| **Express** | Web framework                     |
| **MongoDB** | Database (NoSQL)                  |
| **EJS**     | Templating engine                 |
| **JWT**     | Authentication tokens             |
| **Mongoose**| MongoDB ODM                       |
| **Bcrypt**  | Password hashing                  |
| **Nodemon** | Auto-reload for dev               |

---

## 📁 Folder Structure

```

BLOG/
├── controllers/       # Business logic (blog, user)
├── middlewares/       # Authentication and other middleware
├── models/            # MongoDB schemas (user, blog, comment)
├── public/            # Static files (CSS, images)
├── routes/            # Express route handlers
├── services/          # Utility functions and services
├── views/             # EJS templates
├── .env               # Environment variables
├── index.js           # Entry point
├── package.json       # NPM dependencies
└── .gitignore         # Git ignore rules

````

---

## ⚙️ Getting Started

1. **Clone the Repository**

```bash
git clone https://github.com/ankit-2222/Blogi-Fy.git
cd Blogi-Fy
````

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

Create a `.env` file in the root folder with the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Replace placeholders with actual values (especially for MongoDB and JWT secret)

4. **Start the Server**

```bash
npm start
```

or (if configured):

```bash
nodemon index.js
```

Visit: [http://localhost:8000](http://localhost:8000)

---

## 🧪 Key Routes

| Method | Route           | Description                 | Auth |
| ------ | --------------- | --------------------------- | ---- |
| POST   | `/register`     | User registration           | ❌    |
| POST   | `/login`        | User login (get token)      | ❌    |
| GET    | `/blogs`        | View all blogs              | ❌    |
| POST   | `/blogs`        | Create a new blog           | ✅    |
| GET    | `/blogs/:id`    | View a single blog post     | ❌    |
| PUT    | `/blogs/:id`    | Update a blog (author only) | ✅    |
| DELETE | `/blogs/:id`    | Delete a blog (author only) | ✅    |
| POST   | `/comments/:id` | Add comment to a blog post  | ✅    |

---

## 📸 UI Screens (via EJS)

* 🖥️ Homepage with all blogs
* 🧑‍💻 User Dashboard
* 📝 Create/Edit Blog
* 💬 Comment section
* 🔐 Login/Register

---

## 🔮 Upcoming Improvements

* 🗃️ Pagination for blog listing
* 🖼️ Image upload for blog posts
* 📬 Email notifications
* 🌐 Deployment on Render or Vercel

---

## 🤝 Contributing

Found a bug or have a cool feature idea?

**Fork → Star → Code → PR**

Let’s build a better blog platform together! 💡

---

> Built with 💚 using Node.js, Express, MongoDB, and EJS

```

---

Would you like me to:
- ✅ Save this as `README.md` in your extracted `BLOG` directory?
- 📁 Also generate a `.env.example` file for easy setup?

Let me know!
```
