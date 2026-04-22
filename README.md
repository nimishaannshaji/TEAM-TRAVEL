# TEAM TRAVEL - Student Team Management System

## Project Description

TEAM TRAVEL is a full-stack web application designed to manage team members efficiently.
It allows users to perform complete CRUD (Create, Read, Update, Delete) operations on team members, along with image upload functionality.

The application is built using **React.js (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.

---

## Technologies Used

### Frontend

* React.js
* Axios
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (for image upload)
* CORS

---

## Features

* Add new team members with image upload
* View all members in a card layout
* View detailed information of each member
* Update member details
* Delete member
* Responsive and modern UI (glass + 3D effects)
* Backend API integration

---

## Project Structure

```
TEAM-TRAVEL/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
├── README.md
└── .gitignore
```

---

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/members     | Get all members   |
| GET    | /api/members/:id | Get single member |
| POST   | /api/members     | Add new member    |
| PUT    | /api/members/:id | Update member     |
| DELETE | /api/members/:id | Delete member     |

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/yourusername/TEAM-TRAVEL.git
cd TEAM-TRAVEL
```

---

### 2. Backend Setup

```
cd backend
npm install
npx nodemon server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

App runs on:

```
http://localhost:3000
```

---

## How to Run the Application

1. Start backend server
2. Start frontend server
3. Open browser and go to:

```
http://localhost:3000
```

---

## Functional Overview

* Add members using form
* Upload profile image
* View members in card format
* Click "View" to see details
* Edit and update member info
* Delete members

---

## Future Enhancements

* Search and filter members
* Authentication system
* Deployment (Render / Vercel)
* Pagination

---

## Author

**Team Name:** TEAM TRAVEL

**Project Type:** Full Stack Web Application

---

## Conclusion

This project demonstrates full-stack development using MERN stack concepts, including REST APIs, frontend-backend integration, and dynamic UI design.

---
