import React from 'react';
import { Link } from 'react-router-dom';

export default function TOC() {
  return (
    <div>
      <h1>Labs</h1>
      <ul>
        <li><Link to="Lab1">Lab 1</Link></li>
        <li><Link to="Lab2">Lab 2</Link></li>
        <li><Link to="Lab3">Lab 3</Link></li>
      </ul>
    </div>
  );
}
