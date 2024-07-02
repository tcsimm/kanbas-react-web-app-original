// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Kanbas from './Kanbas';
import LandingPage from './LandingPage';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        <Route path="/Labs/Lab1" element={<Lab1 />} />
        <Route path="/Labs/Lab2" element={<Lab2 />} />
        <Route path="/Labs/Lab3" element={<Lab3 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
