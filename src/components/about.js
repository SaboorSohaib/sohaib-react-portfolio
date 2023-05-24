import React from "react";
import frameworks from '../photos/frameworks.svg';
import languages from '../photos/languages.svg';
import skills from '../photos/skills.svg';
import './style.css';

const About = () => {
    return (
        <main className="main-about">
            <h2 className="about-title">About me</h2>
            <p className="about-text">
            I've spent much time completely immersed in remote development, building everything from landing pages to using APIs.
            I am convinced of the formula for doing work way before, not on time. I've spent the last several months working 
            remotely and asynchronously with people across 2 different time zones (UTC+1, UTC+4:30) which makes me way special.
            </p>
            <button type="button" className="resume-btn">My Resume</button>
            <div className="about-card">
                <div className="single-card">
                    <img src={languages} alt="Languages" className="img"/>
                    <h3>Front End</h3>
                    <div className="skills">
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Jest</span>
                    </div>
                </div>
                <div className="single-card">
                    <img src={frameworks} alt="Frameworks" className="img"/>
                    <h3>Back End</h3>
                    <div className="skills">
                        <span>Ruby</span>
                        <span>Ruby on Rails</span>
                        <span>Rspec</span>
                        <span>PostgreSQL</span>
                    </div>
                </div>
                <div className="single-card">
                    <img src={skills} alt="Skills" className="img"/>
                    <h3>Professional Skills</h3>
                    <div className="skills">
                        <span>Remote Pair Programming</span>
                        <span>Teamwork</span>
                        <span>Communication</span>
                        <span>Problem Solving</span>
                        <span>Git</span>
                        <span>GitHub</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
