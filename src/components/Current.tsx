import React from 'react';
import '../styles/Current.css';
import DocPic from '../assets/chiro.png';
import Real from '../assets/realtalk.png';

const Current: React.FC = () => {
    return (
        <div className="current-container">
          <div className="heading">My Current Projects</div>
      
          <div className="projects-row">
            {/* Project 1 */}
            <div className="project-item">
              <a
                href="https://chirosofgnv.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DocPic} alt="Project 1" className="project-image-one" />
              </a>
              <div className="project-text">
                <h2 style={{ fontFamily: 'Raleway' }}>Chiropractic Website</h2>
                <p style={{ fontFamily: 'Raleway' }}>
                  An intuitive and user-focused website designed for the leading medical practice in the region. It delivers an engaging and inclusive experience for users while empowering doctors with seamless tools to efficiently update and communicate with their patients.
                </p>
      
                <div className="tech-stack">
                  <div className="tech-row">
                    <span className="tech-label">Frontend:</span>
                    <span className="tech-detail">React, TypeScript, Vite, Bootstrap, Framer Motion, React Slick, Axios, CSS</span>
                  </div>
                  <div className="tech-row">
                    <span className="tech-label">Design Focus:</span>
                    <span className="tech-detail">Accessible components, responsive UI, interactive animations, clean typography</span>
                  </div>
                </div>
      
               
              </div>
            </div>
      
            {/* Project 2 */}
            <div className="project-item">
              <a
                href="https://talk.harimasoor.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Real} alt="Project 2" className="project-image-one" />
              </a>
              <div className="project-text">
                <h2 style={{ fontFamily: 'Raleway' }}>RealTalk</h2>
                <p style={{ fontFamily: 'Raleway' }}>
                  This project aims to automate the generation of podcast conversations between a user and our very own AI Host. The core idea is to leverage AI technologies to create a realistic and engaging dialogue based on the user's professional background and the AI Host's public persona.
                </p>
      
                <div className="tech-stack">
                  <div className="tech-row">
                    <span className="tech-label">Backend:</span>
                    <span className="tech-detail">
                      Azure (Web Apps, Container Registry, Blob Storage, AI Foundry), PostgreSQL, FastAPI, Docker, CI/CD, Python, YAML, OpenAI (All Models + Responses API), Perplexity API, Voice Integration, Modern RAG Pipelines, Arize AI (Telemetry), OAuth (Google & LinkedIn)
                    </span>
                  </div>
                  <div className="tech-row">
                    <span className="tech-label">Architecture:</span>
                    <span className="tech-detail">
                      Cloud-native, containerized microservices with robust authentication and observability
                    </span>
                  </div>
                  <div className="tech-row">
                    <span className="tech-label">Frontend:</span>
                    <span className="tech-detail">Next.js, TypeScript, Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }      

export default Current;
// https://github.com/bcline01/doc-site