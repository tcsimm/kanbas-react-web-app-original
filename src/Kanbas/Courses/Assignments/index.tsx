import React from 'react';
import { Link } from 'react-router-dom';

interface AssignmentsProps {
  courseId: string | undefined;
}

export default function Assignments({ courseId }: AssignmentsProps) {
  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        <li>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/1`}>Assignment 1</Link>
        </li>
        <li>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/2`}>Assignment 2</Link>
        </li>
        <li>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/3`}>Assignment 3</Link>
        </li>
      </ul>
    </div>
  );
}
