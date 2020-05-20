import React from "react";
import projects from "../../projects.json";
import Project from "../Project";

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            {projects.map(project => (
               <Project 
               id= {project.id}
               key= {project.id}
               title= {project.title}
               image= {project.image}
               alt= {project.alt}
               text= {project.text}
               deployed= {project.deployed}
               repo= {project.repo}
               /> 
            ))}
        </div>
    );
}

export default Portfolio;