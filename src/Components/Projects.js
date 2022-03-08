import React from "react";
import Card from "./Card";


function Projects() {
    return (
        <section className="projects">
            <h1 className="project--title">My Projects</h1>
            <div className="project--cards">
                <Card />
                <Card />
                <Card />
            </div>
            
        </section>
    );
}
  
export default Projects;