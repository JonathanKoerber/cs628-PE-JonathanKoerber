import React from 'react';
import "./resume.css"

const Resume = () => (
    <div className="resume">
        <header className="header">
            <h1>Jonathan Koerber</h1>
            <p>
                4433 42nd Ave SW, Seattle, WA 98116 | 206.817.9893 |
                <a href="mailto:jonathankoerber@gmail.com">jonathankoerber@gmail.com</a> |
                <a href="mailto:koerberjonathan@cityuniversity.edu">koerberjonathan@cityuniversity.edu</a> |
                <a href="https://jonathankoerber.github.io" target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </p>
            <p className="summary">
                I'm an MSCS student at City University of Seattle and a teaching assistant. As a lifelong learner fascinated by complex systems, I continually refine my development methodology to deliver secure, scalable systems and meaningful value to teams.
            </p>
        </header>

        <section className="section">
            <h2>Education</h2>
            <div className="education">
                <h3>Master's Degree in Computer Science</h3>
                <p>City University of Seattle, Seattle, WA</p>
                <p>Dates: Jan 2023 – Jun 2025 (Expected)</p>
            </div>
            <div className="education">
                <h3>Bachelor of Science (B.S.) in Software Development</h3>
                <p>Western Governors University, Seattle, WA</p>
                <p>Dates: May 2016 – Jun 2020</p>
            </div>
        </section>

        <section className="section">
            <h2>Skills</h2>
            <ul className="skills">
                <li><p>Programming Languages: Python, JavaScript, Java, SQL, Go</p></li>
                <li><p>Frameworks and Tools: React, Django, Node.js, RayTune</p></li>
                <li><p>Data Science: Machine Learning, Data Visualization</p></li>
                <li><p>Cloud & Infrastructure: OpenStack, Airtable, Salesforce</p></li>
                <li><p>Cybersecurity: Firewalls, Network Monitoring, ITIL Framework</p></li>
            </ul>
        </section>
        <section className="section">
            <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Web side</h3>
                    <p>Create a github io side to host portfolio of my projects</p>
                    <a href="https://jonathankoerber.github.io"
                       target="_blank" rel="noopener noreferrer">
                        <p>View Side</p></a>
                </div>
        </section>
        <section className="section">
            <h2>Experience</h2>
                <div className="experience">
                    <h3>Teaching Assistant</h3>
                    <p>City University of Seattle, Seattle, WA</p>
                    <p>Dates: Jan 2023 – Present</p>
                    <ul>
                        <li>
                            <p>Provided support to students in courses such as Secure Systems, Machine Learning, and
                            Full-Stack Development.</p>
                        </li>
                        <li>
                            <p>Assisted in the development of hands-on tutorials and labs for IT and data science courses.</p></li>
                        <li><p>Mentored students in programming best practices and project management.</p></li>
                    </ul>
                </div>
        <div className="experience">
            <h3>Software Developer Intern</h3>
            <p>Open Stack, Seattle, WA</p>
            <p>Dates: May 2020 – Aug 2020</p>
            <ul>
                <li><p>Developed JSON Schemas to validate inputs on the file share service Manila</p></li>
            </ul>
        </div>
</section>
</div>
);

export default Resume;
