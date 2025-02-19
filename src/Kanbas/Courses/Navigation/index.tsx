// src/Kanbas/Courses/Navigation/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CoursesNavigationProps {
  courseId: string | undefined;
}

export default function CoursesNavigation({ courseId }: CoursesNavigationProps) {
  return (
    <ul id="wd-courses-navigation">
      <li><Link to={`/Kanbas/Courses/${courseId}/Home`}>Home</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Modules`}>Modules</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Piazza`}>Piazza</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Zoom`}>Zoom</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Assignments`}>Assignments</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Quizzes`}>Quizzes</Link></li>
      <li><Link to={`/Kanbas/Courses/${courseId}/Grades`}>Grades</Link></li>
    </ul>
  );
}
