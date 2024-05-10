import React from "react";
import "../css/App.css";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import requests from "../components/request";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
