import React from "react";

function Card({ image, title, link }) {
    return (
        <div className="card w-100 h-100">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="card-image img-fluid image-limit" />
        </a>
        <h3 className="card-title">{title}</h3>
      </div>
    );
  }

  export default Card;