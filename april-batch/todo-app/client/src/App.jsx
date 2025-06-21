import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Todo from "./Pages/Todo";

// Protected route wrapper
const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/" replace />;
};

// Public route wrapper
const PublicRoute = ({ user, children }) => {
  return user ? <Navigate to="/app" replace /> : children;
};

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute user={user}>
            <Login setUser={setUser} />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute user={user}>
            <Signup setUser={setUser} />
          </PublicRoute>
        }
      />
      <Route
        path="/app"
        element={
          <ProtectedRoute user={user}>
            <Todo user={user} setUser={setUser} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
