// src/Kanbas/Courses/index.tsx
import React from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import Home from './Home';
import Assignments from './Assignments';
import Modules from './Modules';
import CoursesNavigation from './Navigation';
import AssignmentEditor from './Assignments/Editor';

export default function Courses() {
  const { courseId } = useParams<{ courseId: string }>();

  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation courseId={courseId} />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home courseId={courseId} />} />
                <Route path="Assignments" element={<Assignments courseId={courseId} />} />
                <Route path="Assignments/:id" element={<AssignmentEditor />} />
                <Route path="Modules" element={<Modules />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
