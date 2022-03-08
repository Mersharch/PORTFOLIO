import React from "react";


function Skills() {
    const cssLogo = require('../assests/css3-svgrepo-com.svg');
    const jsLogo = require('../assests/javascript-svgrepo-com.svg');
    const html5Logo = require('../assests/html5-svgrepo-com.svg');
    const reactLogo = require('../assests/react-svgrepo-com.svg');

    const skills = [
        {title: "HTML5", url:html5Logo},
        {title: "CSS3", url:cssLogo},
        {title: "JAVASCRIPT", url:jsLogo},
        {title: "REACT / REACT NATIVE", url:reactLogo}
    ]



    return (
        <section className="skills">
            <h3 className="skills--title">Skills &amp; Tech</h3>
            <div className="skills--container">
                {skills.map((data) => {
                    return (
                        <div className="skills--card">
                            <img src={data.url} alt="#" className="skills-card-img" />
                            <h3 className="skills-card-title" >{data.title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
  
export default Skills;