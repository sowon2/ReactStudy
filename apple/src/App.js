import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import LandingPage from "./pages/LandingPage/LandingPage.js";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>      
    </Routes>
  );
}

export default App;

