// src/Kanbas/index.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './Navigation';

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/*" element={<Courses />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
