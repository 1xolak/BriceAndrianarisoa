// src/components/Projects.js
import React from "react";

function Projects() {
  const projects = [
    {image: "/images/tabl1.PNG",},
    {image: "/images/1.png",},
    {image: "/images/2.jpg", },
    {image: "/images/3.png", },
    {image: "/images/4.png",},
    {image: "/images/5.jpg",},
    {image: "/images/6.jpg",},
    {image: "/images/7.png",},
    {image: "/images/8.jpg",},
    {image: "/images/9.jpg",},
    {image: "/images/10.jpg",},
    {image: "/images/11.png",},
    {image: "/images/12.jpg",},
    
    // Ajoute plus de projets ici
  ];
  return (
    <section className="projects">
        <div className="gallery">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="gallery-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

export default Projects;
