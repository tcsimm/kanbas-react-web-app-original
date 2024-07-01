import React from 'react';
import Lab1 from './Lab1';
import { Route, Routes, Navigate } from 'react-router';

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        {/* Add more lab routes here as needed */}
      </Routes>
    </div>
  );
}
