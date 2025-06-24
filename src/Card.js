import React from 'react';
import './Card.css'; 
import profileThumbnail from './img/profile-thumbnail.png';

const Card = () => {
  return (
    <div className="card">
        <div className="card-header">
            <img src={profileThumbnail} alt="Profile thumbnail" className="avatar" />
            <div className="user-info">
                <span className="name">Sarah Dole</span>
                <span className="username">@sarahdole</span>
            </div>
        </div>
        <span>
            I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
        </span>
    </div>
  );
};

export default Card;
