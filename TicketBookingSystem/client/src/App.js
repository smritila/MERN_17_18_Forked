import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Places from "./pages/Places";
import TicketBookPage from "./pages/TicketBookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<TicketBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
