import React from "react";


function Card() {
    return (
        <section className="card">
            <h3 className="card--title">Card Title</h3>
            <div className="card--vid"></div>
            {/*<video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
            </video>*/}
            <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id.</p>
            <div className="card--link">
                <a className="card--url" href="#">Visit Project</a>
            </div>            
        </section>
    );
}
  
export default Card;