import React, { useState } from 'react';

export default function CourseStatus() {
  const [status, setStatus] = useState('Published');
  const [notifications, setNotifications] = useState<string[]>([]); // Explicitly typing notifications as an array of strings

  const handleUnpublish = () => {
    setStatus('Unpublished');
  };

  const handlePublish = () => {
    setStatus('Published');
  };

  const handleViewNotifications = () => {
    setNotifications([
      'Notification 1: Assignment due date changed',
      'Notification 2: New material added to the course',
      'Notification 3: Exam schedule updated'
    ]);
  };

  return (
    <div id="wd-course-status">
      <h2>Course Status: {status}</h2>
      <button onClick={handleUnpublish}>Unpublish</button> 
      <button onClick={handlePublish}>Publish</button>
      <button onClick={handleViewNotifications}>View Course Notifications</button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}
