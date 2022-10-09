import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/react_router_example">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/acercade" element={<Navigate to="/about" />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<h1>Esto es welcome</h1>} />
        </Route>
        <Route
          path="/sobrenosotros"
          element={<Navigate replace to="/about" />}
        />
        {/* //ya no permite regresar */}
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
