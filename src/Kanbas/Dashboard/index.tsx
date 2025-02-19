export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="React JS Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Data Analytics Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
              CS5690 Data Analytics
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to RStudio data analytics
            </p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="C Programming Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9101/Home">
              CS5250 C Programming
            </a>
            <p className="wd-dashboard-course-title">
              C programming
            </p>
            <a href="#/Kanbas/Courses/9101/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Data Visualization Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1121/Home">
              CS5730 Data Visualization
            </a>
            <p className="wd-dashboard-course-title">
              Data Visualization
            </p>
            <a href="#/Kanbas/Courses/1121/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Data Mining Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3141/Home">
              CS3820 Data Mining
            </a>
            <p className="wd-dashboard-course-title">
              Data Mining
            </p>
            <a href="#/Kanbas/Courses/3141/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Web Browsers Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5161/Home">
              CS5610 Web Browsers
            </a>
            <p className="wd-dashboard-course-title">
              Web Browsers
            </p>
            <a href="#/Kanbas/Courses/5161/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Database Systems Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7181/Home">
              CS5200 Database Systems
            </a>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <a href="#/Kanbas/Courses/7181/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/logo512.png" width={200} alt="Machine Learning Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9201/Home">
              CS5900 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Machine Learning
            </p>
            <a href="#/Kanbas/Courses/9201/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
