# 🌍 Wanderlust

A full-stack travel listing web application inspired by Airbnb, where users can **explore**, **create**, **edit**, and **review** travel listings. Built with Node.js, Express, MongoDB, and EJS templating — featuring user authentication, image uploads, and interactive maps.

---

## 🖥️ Live Preview

> Run locally by following the setup instructions below.

---

## 📁 Project Structure

```
wanderlust-project/
│
├── controllers/        # Route handler logic (listings, reviews, users)
├── init/               # Database seed/initialization scripts
├── models/             # Mongoose models (Listing, Review, User)
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Express route definitions
├── uploads/            # Local file uploads (before Cloudinary)
├── utils/              # Utility functions (error handling,wrapAsync etc.)
├── views/              # EJS templates and layouts
│
├── app.js              # Main Express application entry point
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js        # Custom middleware (auth, validation, etc.)
├── schema.js           # Joi validation schemas
├── package.json
└── .gitignore
```

---

## ✨ Features

- 🏠 **Browse Listings** — Explore travel destinations with images, location, and pricing
- ➕ **Create & Edit Listings** — Authenticated users can add and manage their own listings
- 🗺️ **Interactive Maps** — MapTiler SDK integration to show listing locations on a map
- 🖼️ **Image Uploads** — Upload listing photos via Cloudinary (cloud storage)
- ⭐ **Reviews & Ratings** — Users can leave reviews on listings
- 🔐 **User Authentication** — Secure signup/login with Passport.js (local strategy)
- 🛡️ **Authorization** — Only listing/review owners can edit or delete their content
- ✅ **Form Validation** — Server-side validation using Joi
- 🔁 **Flash Messages** — User-friendly success and error notifications
- 📦 **Session Management** — Persistent sessions stored in MongoDB via connect-mongo

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js v22 |
| **Framework** | Express.js v5 |
| **Database** | MongoDB + Mongoose |
| **Templating** | EJS + EJS-Mate (layouts) |
| **Authentication** | Passport.js (passport-local, passport-local-mongoose) |
| **Image Storage** | Cloudinary + Multer |
| **Maps** | MapTiler SDK |
| **Validation** | Joi |
| **Sessions** | express-session + connect-mongo |
| **Styling** | CSS3 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Cloudinary](https://cloudinary.com/) account
- [MapTiler](https://www.maptiler.com/) API key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Vaishnavi-sapkal/wanderlust-project.git

# 2. Navigate into the project folder
cd wanderlust-project

# 3. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# MongoDB
ATLASDB_URL=your_mongodb_connection_string

# Session
SECRET=your_session_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# MapTiler
MAP_TOKEN=your_maptiler_api_key
```

### Seed the Database (Optional)

```bash
node init/index.js
```

### Run the App

```bash
node app.js
```

Visit `http://localhost:8080` in your browser.

---

## 📸 Screenshots

> *(Add screenshots of your project here)*

| Home Page | Listing Detail |
|---|---|
| ![Home](./public/assets/home.png) | ![Listing](./public/assets/listing.png) |

---

## 🙋‍♀️ Author

**Vaishnavi Sapkal**
- GitHub: [@Vaishnavi-sapkal](https://github.com/Vaishnavi-sapkal)

---

If you found this project helpful, feel free to give it a **star** ⭐ — it means a lot!
