# React Book Project 📚

A modern book search application built with **React** and **Vite**, utilizing the **Google Books API**.

## Features ✨

- **Search Books**: Find books by title, author, or keywords.
- **Popular Books**: Automatically valid popular books on load.
- **Favorites System**: Save your favorite books (persisted locally).
- **Responsive Design**: Works on desktop and mobile.

## Tech Stack 🛠️

- **Frontend**: React, Vite
- **Styling**: Vanilla CSS (Responsive Grid)
- **State Management**: Context API (`BookContext`)
- **API**: Google Books API

## Setup & Installation 🚀

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/YOUR_USERNAME/react-book-project.git
    cd react-book-project/frontend
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Configure API Key**:
    - Get a free API key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
    - Create a `.env` file in the `frontend` folder.
    - Add your key:
      ```env
      VITE_GOOGLE_BOOKS_API_KEY=YOUR_API_KEY_HERE
      ```

4.  **Run the App**:
    ```bash
    npm run dev
    ```

## Project Structure 📂

```
frontend/
├── src/
│   ├── components/   # Reusable UI components (BookCard, NavBar)
│   ├── contexts/     # State management (BookContext)
│   ├── css/          # Stylesheets
│   ├── pages/        # Page views (Home, Favorites)
│   ├── services/     # API integration (api.js)
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Entry point
├── .env              # Environment variables
└── package.json      # Dependencies
```
