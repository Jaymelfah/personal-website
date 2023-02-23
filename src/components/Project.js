import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";



const Project = ({ name, image, description, source, live }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project shadow-xl shadow-black flex flex-col justify-center items-center ${isFlipped ? 'flipped' : ''}`}>
      <div className="project-front flex flex-col items-center justify-center w-full" onClick={handleImageClick}>
        <h6 className="text-red-400">{name}</h6>
        <img className="w-4/5 h-4/5" src={image} alt={name} />
      </div>
      <div className="project-back w-full">
        <p>{description}</p>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <FaGithub />          
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <p>Live <BsFillArrowUpRightCircleFill /></p>         
        </a>
        <button onClick={handleImageClick}>Close</button>
      </div>
    </div>
  );
};

export default Project;
