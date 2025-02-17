# 📌 Task Manager App  

## 📋 Description  

Task Manager App is a task management application with user registration, authentication, and task filtering features.  

## 🚀 Features  

- User registration and authentication  
- Adding, editing, and deleting tasks  
- Filtering tasks by status  
- Storing user tokens using `redux-persist`  
- Error handling and loading indication in the UI  

## 🛠️ Technologies  

- **React** – library for building UI  
- **Redux Toolkit** – state management  
- **Redux Persist** – state persistence in `localStorage`  
- **Axios** – API communication  
- **React Router** – routing  

## 📂 Installation and Setup  

### 🔹 Clone the Repository  

```bash
git clone https://github.com/IvanGodPro24/task-list-project.git
cd task-list-project
```

### 🔹 Install Dependencies  

```bash
npm install
```

### 🔹 Start the Project  

```bash
npm run dev
```

## 📌 Project Structure  

```
/src
├── components    # UI components
├── redux         # Redux logic
│   ├── auth      # Authentication
│   ├── tasks     # Task management
│   ├── filters   # Filtering
├── pages         # Main pages
├── App.jsx       # Main component
└── main.jsx      # Entry point
```

## 📌 Key Files  

### `redux/auth/authSlice.js`  

Contains logic for registration, authentication, token storage, and error handling.  

### `redux/tasks/tasksSlice.js`  

Stores the task list and handles adding, editing, and deleting tasks.  

### `redux/selectors.js`  

Optimized selectors for retrieving data from the `store`.  

## 📌 Contacts  

💡 If you have any questions or suggestions – feel free to reach out!
