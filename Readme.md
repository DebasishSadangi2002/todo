# MERN Stack Todo Application

A full-stack todo application built using MongoDB, Express.js, React.js, and Node.js (MERN) with modern UI/UX design.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality
- **CRUD Operations**: Create, read, update, and delete tasks
- **Data Persistence**: MongoDB database storage
- **Protected Routes**: Secure API endpoints with authentication

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux Toolkit (State Management)
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- Git

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/DebasishSadangi2002/todo.git
cd todo-app
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```


```

## 🚀 Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm start
```

The application should now be running on:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 📁 Project Structure

 todo-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   └── Task/
│   │   │       ├── TaskFilter.jsx
│   │   │       ├── TaskForm.jsx
│   │   │       └── TaskList.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── TaskContext.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegistrationPage.jsx
│   │   │   └── TaskPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
│
└── backend/
    ├── controllers/
    │   ├── taskController.js
    │   └── userController.js
    ├── models/
    │   ├── Task.js
    │   └── User.js
    ├── routes/
    │   ├── taskRoutes.js
    │   └── userRoutes.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── config/
    │   └── db.js
    └── server.js

## 🔒 API Endpoints

### Auth Routes
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user

### Task Routes (Protected Routes - Require Authentication)
- `GET /api/task` - Get all tasks
- `POST /api/task` - Create a new task
- `PUT /api/task/:id` - Update a task
- `DELETE /api/task/:id` - Delete a task

All task routes are protected and require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer your_jwt_token
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [DebasishSadangi2002](https://github.com/DebasishSadangi2002)
- LinkedIn: [Debasish Sadangi](https://www.linkedin.com/in/debasish-sadangi-801230237/)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- References

## 📞 Support

For support, issues, or feature requests, please create an issue in the GitHub repository.