# ChatApp

A full-stack, real-time chat application that allows users to communicate instantly with text, images, and video messages. This project is built using a modern JavaScript stack and prioritizes a smooth, interactive user experience.

## 🌟 Features

- **Real-Time Messaging**: Instantly send and receive messages using WebSockets.
- **Media Support**: Share images and videos within your conversations.
- **User Authentication**: Secure signup, login, and logout flows.
- **Online Status**: See which users are online in real time.
- **Responsive UI**: Fully responsive interface designed with usability in mind.
- **Profile Management**: Update your profile and manage account settings.
- **Sidebar User List**: Browse and select users to chat with.
- **Message Notifications**: Toast notifications for actions and errors.
- **Emoji Picker**: Express yourself with emojis in your messages.

## 🚀 Tech Stack

- **Frontend**: React, Zustand (state management), React Router, Tailwind CSS, Vite
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Real-Time**: Socket.io
- **Media Storage**: Cloudinary
- **Other Tools**: React Hot Toast, Emoji Picker

## 🖥️ Live Demo

Try the app: [ChatApp Live](https://chatapp-1-y3uh.onrender.com)

## 📦 Project Structure

```
/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── lib/
│       ├── routes/
│       └── ...
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        ├── store/
        ├── lib/
        └── ...
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)
- [Cloudinary](https://cloudinary.com/) account for media storage

### 1. Clone the Repository

```bash
git clone https://github.com/Deepshikha1211/ChatApp.git
cd ChatApp
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Copy `.env.example` to `.env` and fill in your MongoDB URI, JWT secret, Cloudinary credentials, etc.

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will typically run on `http://localhost:5173` by default.

### 4. Access the App

- Visit the frontend URL in your browser.
- Register a new account and start chatting!

## 📄 Environment Variables

Both frontend and backend may require environment variables. Refer to the provided `.env.example` files in each directory for required keys.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.


---

Made with ❤️ by [Deepshikha1211](https://github.com/Deepshikha1211)
