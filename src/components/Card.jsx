import React from "react";

function Card({ image, title, link }) {
    return (
        <div className="card">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="card-image" />
        </a>
        <h3 className="card-title">{title}</h3>
      </div>
    );
  }

  export default Card;