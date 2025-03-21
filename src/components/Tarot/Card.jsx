// src/components/Tarot/Card.jsx
import React from 'react';
// import '../../css/Card.css';

const Card = ({ card, onSelect, isSelected, revealed }) => {
    const handleClick = () => {
      if (!revealed) onSelect(card);
    };
  
    const imgSrc = `img/deck/${card.id}.jpg`;
  
    return (
      <div
        className={`tarot-card ${isSelected ? 'selected' : ''}`}
        onClick={handleClick}
      >
        {isSelected ? (
          <img
            src={imgSrc}
            alt={card.name}
            className={card.reversed ? 'reversed-img' : ''}
          />
        ) : (
          <div className="backside"></div>
        )}
      </div>
    );
  };

  
export default Card;
