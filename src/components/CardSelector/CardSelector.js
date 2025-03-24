"use client"

import React, { useRef, useState, useEffect } from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './CardSelector.module.css';


function CardSelector({ 
  shuffledCards, 
  selectedCards, 
  onCardSelect,
  maxCards
}) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioPath = '/Tarot-Project/sounds/card-sounds-35956.mp3';
    const newAudio = new Audio(audioPath);
    newAudio.volume = 0.5;
    setAudio(newAudio);

    return () => {
      if (newAudio) {
        newAudio.pause();
        newAudio.currentTime = 0;
      }
    };
  }, []);

  const isCardSelected = (card) => 
    selectedCards.some(selected => selected.code === card.code);

  const playCardSound = () => {
    if (audio && selectedCards.length < maxCards) {
      try {
        audio.currentTime = 0;
        audio.play().catch(error => {
          console.error("Audio play error:", error);
        });
      } catch (error) {
        console.error("Audio error:", error);
      }
    }
  };

  const handleCardSelect = (card) => {
    if (selectedCards.length < maxCards) {
      playCardSound();
      onCardSelect(card);
    }
  };

  const canSelectMore = selectedCards.length < maxCards;

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardLayout}>
        <div className={styles.cardsContainer}>
          {shuffledCards.map((card, index) => {
            if (selectedCards.some(selected => selected.code === card.code)) return null;
            
            return (
              <TarotCard
                key={card.code || index}
                card={card}
                isBack={true}
                isSelected={false}
                onClick={() => handleCardSelect(card)}
                variant="selector" // Dùng variant 'selector'
                style={{
                  cursor: canSelectMore ? 'pointer' : 'not-allowed'
                }}
              />
            );
          })}
        </div>
      </div>

      {!canSelectMore && (
        <div className={styles.maxCardsMessage}>
          Bạn đã chọn đủ {maxCards} lá bài
        </div>
      )}
    </div>
  );
}

export default CardSelector;