// src/Kanbas/Courses/index.tsx

import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

export default function Courses() {
  const { id } = useParams<{ id: string }>();

  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation courseId={id} />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h3>Home</h3>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<h3>Assignments</h3>} />
                <Route path="Assignments/:id" element={<h3>Assignment Editor</h3>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
