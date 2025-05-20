import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-card">
      <div className="background-image">
        <div className="over"></div>
        <img
          className="profile-image"
          src="anujImg.jpeg"
          alt="Profile"
        />
      </div>
      <div className="about-content">
        <h2 className="name">Anuj Upadhyay</h2>
        <p className="location">Mumbai ↔️ Delhi NCR</p>
        <div className="followers-preview">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Follower 1" />
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Follower 2" />
          <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Follower 3" />
          <span className="plus-count">+12</span>
        </div>
        <div style={{fontFamily: 'Segoe UI, sans-serif', fontSize: '16px', lineHeight: '1.6'}}>
  <p><em>Breaks bugs for breakfast. Ships pixels like poetry.</em></p>
  <p><code>if (code !== perfect)</code><br /><strong>I don’t push.</strong></p>
</div>
        <div className="stats">
          <div>
            <h3>170+</h3>
            <p>Leetcode questions</p>
            <a href="https://leetcode.com/u/anuuuuuujjjjj/" target='_blank'><img style={{marginTop:'5px', width:'30px', height:'40px', borderRadius:'50%'}} src="leetcode.png" alt="leetcode link" /></a>
            <p>Link to profile</p>
          </div>
          <div>
            <h3>170+</h3>
            <p>Codeforces Questions</p>
            <a href="https://codeforces.com/profile/ANUJUPADHYAY" target='_blank'><img style={{marginTop:'5px', width:'30px', height:'40px', borderRadius:'50%'}} src="Codeforces.png" alt="leetcode link" /></a>
            <p>Link to profile</p>
          </div>
          <div>
            <h3>6+</h3>
            <p>FrontEnd Projects</p>
            <a href="https://github.com/Anuj192006" target='_blank'><img style={{marginTop:'5px', width:'30px', height:'40px', borderRadius:'50%'}} src="GitHub.png" alt="leetcode link" /></a>
            <p>Link to profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
