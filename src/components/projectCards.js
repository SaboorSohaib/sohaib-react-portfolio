import React from "react";
import worldVision from '../photos/worldVision.png';
import './style.css'

const ProjectCards = () => {
    return (
        <main className="card-main">
            <h2 className="project-title">My Recent Works</h2>
            <div className="projects-cards">
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
                <div className="card">
                    <img src={worldVision} alt="World Vision" className="project-img"/>
                    <h3>Project 1</h3>
                    <div className="stack">
                        <span>Ruby on Rails</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <button type="button" className="project-btn">See Project</button>
                </div>
            </div>        
        </main>
    );
};

export default ProjectCards;