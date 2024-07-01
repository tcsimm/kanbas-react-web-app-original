import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="ReactJS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">Full Stack software developer</p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="ReactJS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
              CS5678 Advanced React
            </a>
            <p className="wd-dashboard-course-title">Advanced React techniques</p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="ReactJS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/91011/Home">
              CS91011 React Native
            </a>
            <p className="wd-dashboard-course-title">Building mobile apps with React Native</p>
            <a href="#/Kanbas/Courses/91011/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
