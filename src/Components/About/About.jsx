import React from 'react'
import './About.css'
function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me !</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src="haider_image.jpg" alt="Haider Ali Image" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Front-End Developer with a strong command of JavaScript and expertise in frameworks such as React.js. Skilled in HTML, CSS, Tailwind CSS, and modern front-end development practices. Experienced in building responsive, user-friendly web applications with a keen eye for detail and design.</p>
                <p>Proficient in version control with Git & GitHub and knowledgeable in essential computer science concepts like Data Structures and Algorithms, OS, DBMS, and Computer Networks. Passionate about continuous learning and staying up-to-date with the latest industry trends.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>React Js</p> <hr style={{width:"75%"}} />
                </div>
                <div className="about-skill">
                    <p>Git & GitHub</p> <hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>DSA</p> <hr style={{width:"45%"}} />
                </div>
            </div>
        </div>
        
      </div>
      <div className="about-achievements">
            <div className="achievements">
                <h1>Ex-Intern</h1>
                <p>Web Development @Codsoft </p>
            </div>
            <hr />
            <div className="achievements">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="achievements">
                <h1>Top 5%</h1>
                <p>RANK GETTER IN GRADUATION</p>
            </div>
        </div>
    </div>
  )
}

export default About
