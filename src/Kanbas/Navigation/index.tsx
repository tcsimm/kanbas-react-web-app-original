// src/Kanbas/Navigation/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function KanbasNavigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Northeastern</Link></li>
        <li><Link to="/Account">Account</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/Calendar">Calendar</Link></li>
        <li><Link to="/Inbox">Inbox</Link></li>
        <li><Link to="/Labs">Labs</Link></li>
      </ul>
    </nav>
  );
}
