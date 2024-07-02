import React from 'react';

interface HomeProps {
  courseId: string | undefined;
}

export default function Home({ courseId }: HomeProps) {
  return (
    <div>
      <h2>Course Home - {courseId}</h2>
      <p>Welcome to the course!</p>
    </div>
  );
}
