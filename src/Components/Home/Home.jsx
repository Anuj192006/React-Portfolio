import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-fixed">
        <div className="profile-header">
          <img src="ANUJ.png" alt="" className="pfp" />
          <div className="profile-text">
            <div className="name-hover-wrapper">
              <a className="name" href="/about" style={{ color: "black" }}>
                <h2>
                  Anuj Upadhyay <img src="tick.png" alt="" className="tick" />
                </h2>
              </a>
            </div>
            <a className="logbook-link" href="/logbook">
              Logbook
            </a>
            <a className="logbook-link" href="/about">
              About Me
            </a>
          </div>
        </div>

        <p>
          B.Tech CS & AI | PYTHON | JAVASCRIPT | NEWTON SCHOOL OF TECHNOLOGY |
          RISHIHOOD UNIVERSITY
        </p>
        <div className="contact-wrapper">
  <p>
    Mumbai, Maharashtra, India <span className="contact-label">Contact info</span>
  </p>
  <div className="contact">
    <a href="https://www.linkedin.com/in/anuj-upadhyay-a8455b30b/" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="mailto:anuj.upadhyay2024@nst.rishihood.edu.in">Mail</a>
  </div>
</div>
<br />

        
        <a href="https://js-project-blue.vercel.app/index2.html" target="_blank" rel="noreferrer">
          My project/-
        </a>
      </div>

      <div className="content-container">
        <div className="home">
          <h1>Highlights</h1>

          {/* Project 1 */}
          <div className="linkedin-post">
            <div className="post-header">
              <img src="ANUJ.png" alt="profile" className="post-pfp" />
              <div>
                <h4>
                  Anuj Upadhyay <span className="dot">•</span> You
                </h4>
                <p className="post-subtitle">
                  B.Tech CS & AI | PYTHON | JAVASCRIPT | NEWTON SCHOOL OF TECHNOLOGY
                </p>
                <p className="post-time">
                  1mo <span className="dot">•</span> Edited <span className="globe">🌐</span>
                </p>
              </div>
            </div>
            <div className="post-body">
              <p className="post-caption">
                Latest Project Update: 🚀<br />
                Thrilled to showcase my AI powered Multiple Tools for Corporate life, built using React.js 💻✨<br />
                Conceptualized and implemented independently.<br />
                Project link: <a href="https://corp-pal.vercel.app/" target="_blank" rel="noreferrer">CorpPal</a>
              </p>
              <img src="CorpPal.png" alt="CorpPal" className="post-image" />
            </div>
          </div>

          {/* Project 2 */}
          <div className="linkedin-post">
            <div className="post-header">
              <img src="ANUJ.png" alt="profile" className="post-pfp" />
              <div>
                <h4>
                  Anuj Upadhyay <span className="dot">•</span> You
                </h4>
                <p className="post-subtitle">
                  B.Tech CS & AI | PYTHON | JAVASCRIPT | NEWTON SCHOOL OF TECHNOLOGY
                </p>
                <p className="post-time">
                  2mo <span className="dot">•</span> Edited <span className="globe">🌐</span>
                </p>
              </div>
            </div>
            <div className="post-body">
              <p className="post-caption">
                Latest Project Update: 🚀<br />
                Introducing my AI-powered Task Manager built with React.js. 💻✨<br />
                Independently thought and built.<br />
                Project link: <a href="https://life-grid-45i5.vercel.app/" target="_blank" rel="noreferrer">LifeGrid</a>
              </p>
              <img src="LifeGrid.png" alt="LifeGrid" className="post-image" />
            </div>
          </div>

          {/* LeetCode Challenge */}
          <div className="linkedin-post">
            <div className="post-header">
              <img src="ANUJ.png" alt="profile" className="post-pfp" />
              <div>
                <h4>
                  Anuj Upadhyay <span className="dot">•</span> You
                </h4>
                <p className="post-subtitle">
                  B.Tech CS & AI | PYTHON | JAVASCRIPT | NEWTON SCHOOL OF TECHNOLOGY
                </p>
                <p className="post-time">
                  3mo <span className="dot">•</span> Edited <span className="globe">🌐</span>
                </p>
              </div>
            </div>
            <div className="post-body">
              <p className="post-caption">
                🚀 Consistency in Action: 50 Days of LeetCode! 💡<br />
                Solved problems daily across Data Structures & Algorithms.<br />
                Strengthened core concepts and problem-solving mindset. 📈
              </p>
              <video className="post-image" muted loop autoPlay>
                <source src="50days.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
