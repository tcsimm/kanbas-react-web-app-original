// src/Kanbas/Courses/index.tsx
import React from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import Home from './Home';
import Assignments from './Assignments';
import Modules from './Modules';
import Navigation from './Navigation';
import AssignmentEditor from './Assignments/Editor';

export default function Courses() {
  const { id } = useParams<{ id: string }>();

  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <Navigation courseId={id} />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home courseId={id} />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments courseId={id} />} />
                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
