import React from "react";
import '../styles/Card.css';

function Card({ image, title, link }) {
    return (
        <div className="card">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
        <div className="card-body">
        {/* <h3 className="card-title">{title}</h3> */}
      </div>
      </div>
    );
  }

  export default Card;