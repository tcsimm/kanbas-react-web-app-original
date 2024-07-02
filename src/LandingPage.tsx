// src/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>Full Name: Thomas Simmons</p>
      <p>Section: Summer 2</p>
      <h2>Lab Assignments</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      </ul>
      <h2>Kanbas Application</h2>
      <ul>
        <li><Link to="/Kanbas">Kanbas Application</Link></li>
      </ul>
      <h2>Source Code Repositories</h2>
      <ul>
        <li><a href="https://github.com/simmonsthomas/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">Repository 1</a></li>
      </ul>
    </div>
  );
}
