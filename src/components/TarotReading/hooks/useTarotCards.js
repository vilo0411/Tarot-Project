// src/components/TarotReading/hooks/useTarotCards.js
import { useState, useEffect, useCallback } from 'react';

const useTarotCards = (initialCards = []) => {
  const [allCards, setAllCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate all tarot cards
  const generateTarotCards = useCallback(() => {
    try {
      // Major Arcana cards
      const majorArcana = Array.from({ length: 22 }, (_, i) => ({
        id: `major-${i}`,
        name: getMajorArcanaName(i),
        code: `m${String(i).padStart(2, '0')}`,
        type: 'major',
        suit: null,
        number: i,
      }));
      
      // Minor Arcana cards
      const suits = ['cups', 'wands', 'swords', 'pentacles'];
      const minorArcana = suits.flatMap(suit => 
        Array.from({ length: 14 }, (_, i) => ({
          id: `${suit}-${i + 1}`,
          name: getMinorArcanaName(suit, i + 1),
          code: `${suit.charAt(0)}${String(i + 1).padStart(2, '0')}`,
          type: 'minor',
          suit,
          number: i + 1,
        }))
      );
      
      return [...majorArcana, ...minorArcana];
    } catch (err) {
      setError(err.message || 'Failed to generate tarot cards');
      return [];
    }
  }, []);

  // Get Major Arcana card name based on number
  const getMajorArcanaName = (number) => {
    const names = [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 
      'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot',
      'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice',
      'The Hanged Man', 'Death', 'Temperance', 'The Devil',
      'The Tower', 'The Star', 'The Moon', 'The Sun',
      'Judgement', 'The World'
    ];
    return names[number] || `Unknown Major Arcana (${number})`;
  };

  // Get Minor Arcana card name based on suit and number
  const getMinorArcanaName = (suit, number) => {
    if (number < 1 || number > 14) return `Unknown ${suit} (${number})`;
    
    // Court cards
    if (number === 11) return `Page of ${capitalize(suit)}`;
    if (number === 12) return `Knight of ${capitalize(suit)}`;
    if (number === 13) return `Queen of ${capitalize(suit)}`;
    if (number === 14) return `King of ${capitalize(suit)}`;
    
    // Ace
    if (number === 1) return `Ace of ${capitalize(suit)}`;
    
    // Number cards
    return `${number} of ${capitalize(suit)}`;
  };

  // Capitalize first letter of string
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Initialize cards on mount
  useEffect(() => {
    try {
      setIsLoading(true);
      const generatedCards = generateTarotCards();
      setAllCards(generatedCards);
      setIsLoading(false);
    } catch (err) {
      setError(err.message || 'Failed to initialize tarot cards');
      setIsLoading(false);
    }
  }, [generateTarotCards]);

  // Shuffle the deck and mark random cards as reversed
  const shuffleDeck = useCallback(() => {
    try {
      if (allCards.length === 0) return;
      
      const shuffled = [...allCards]
        .map(card => ({
          ...card,
          isReversed: Math.random() > 0.5,
        }))
        .sort(() => Math.random() - 0.5);
      
      setShuffledCards(shuffled);
      setSelectedCards([]);
    } catch (err) {
      setError(err.message || 'Failed to shuffle deck');
    }
  }, [allCards]);

  // Initialize shuffled cards when all cards are loaded
  useEffect(() => {
    if (allCards.length > 0 && shuffledCards.length === 0) {
      shuffleDeck();
    }
  }, [allCards, shuffledCards.length, shuffleDeck]);

  // Select a card from the deck
  const selectCard = useCallback((cardId) => {
    try {
      const cardToSelect = shuffledCards.find(card => card.id === cardId);
      if (!cardToSelect) {
        throw new Error(`Card with ID ${cardId} not found`);
      }
      
      setSelectedCards(prev => [...prev, cardToSelect]);
    } catch (err) {
      setError(err.message || 'Failed to select card');
    }
  }, [shuffledCards]);

  // Unselect a card
  const unselectCard = useCallback((cardId) => {
    setSelectedCards(prev => prev.filter(card => card.id !== cardId));
  }, []);

  // Clear all selected cards
  const clearSelectedCards = useCallback(() => {
    setSelectedCards([]);
  }, []);

  // Reset everything
  const resetCards = useCallback(() => {
    setSelectedCards([]);
    shuffleDeck();
  }, [shuffleDeck]);

  return {
    allCards,
    shuffledCards,
    selectedCards,
    isLoading,
    error,
    shuffleDeck,
    selectCard,
    unselectCard,
    clearSelectedCards,
    resetCards,
  };
};

export default useTarotCards;