import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  courseId: string | undefined;
}

export default function Navigation({ courseId }: NavigationProps) {
  return (
    <nav>
      <ul>
        <li><Link to={`/Kanbas/Courses/${courseId}`}>Home</Link></li>
        <li><Link to={`/Kanbas/Courses/${courseId}/Assignments`}>Assignments</Link></li>
        <li><Link to={`/Kanbas/Courses/${courseId}/Modules`}>Modules</Link></li>
      </ul>
    </nav>
  );
}
