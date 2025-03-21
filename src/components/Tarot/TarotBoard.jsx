// src/components/Tarot/TarotBoard.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
// import '../../css/TarotBoard.css';

const generateDeck = () => {
  const deck = [];

  // Major Arcana: m00 -> m21
  for (let i = 0; i <= 21; i++) {
    const number = i.toString().padStart(2, '0');
    deck.push({ id: `m${number}`, name: `Major ${number}` });
  }

  // Minor Arcana: Cups, Wands, Swords, Pentacles
  const suits = ['c', 'w', 's', 'p']; // cups, wands, swords, pentacles
  suits.forEach((suit) => {
    for (let i = 1; i <= 14; i++) {
      const number = i.toString().padStart(2, '0');
      deck.push({ id: `${suit}${number}`, name: `${suit.toUpperCase()} ${number}` });
    }
  });

  return deck;
};

const TarotBoard = () => {
  const [deck, setDeck] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const shuffledDeck = generateDeck().sort(() => 0.5 - Math.random());
    setDeck(shuffledDeck);
  }, []);

  const handleSelect = (card) => {
    if (selectedCards.length >= 3 || selectedCards.find((c) => c.id === card.id)) return;
    setSelectedCards([...selectedCards, { ...card, reversed: Math.random() > 0.5 }]);
  };

  const resetBoard = () => {
    const shuffledDeck = generateDeck().sort(() => 0.5 - Math.random());
    setDeck(shuffledDeck);
    setSelectedCards([]);
    setRevealed(false);
  };

  return (
    <div className="tarot-board">
      <h2>Chọn 3 lá bài bất kỳ</h2>
      <div className="card-container">
        {deck.map((card) => {
          const selected = selectedCards.find((c) => c.id === card.id);
          return (
            <Card
              key={card.id}
              card={card}
              onSelect={handleSelect}
              isSelected={selected}
              revealed={revealed}
            />
          );
        })}
      </div>

      {selectedCards.length === 3 && !revealed && (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>
          Lật bài
        </button>
      )}

      {revealed && (
        <div className="result">
          <h3>Kết quả:</h3>
          <ul>
            {selectedCards.map((card) => (
              <li key={card.id}>
                {card.name} - {card.reversed ? 'Lá Ngược' : 'Lá Xuôi'}
              </li>
            ))}
          </ul>
          <button onClick={resetBoard}>Chơi lại</button>
        </div>
      )}
    </div>
  );
};

export default TarotBoard;
