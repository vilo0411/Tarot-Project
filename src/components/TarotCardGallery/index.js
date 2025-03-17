import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './TarotCardGallery.module.css';

export default function TarotCardGallery({ category }) {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  // Define card mapping based on category
  const getCards = () => {
    switch(category) {
      case 'major':
        return MAJOR_ARCANA;
      case 'cups':
        return CUPS;
      case 'swords':
        return SWORDS;
      case 'wands':
        return WANDS;
      case 'pentacles':
        return PENTACLES;
      default:
        return [...MAJOR_ARCANA, ...CUPS, ...SWORDS, ...WANDS, ...PENTACLES];
    }
  };

  const cards = getCards();

  return (
    <div className={styles.cardGallery}>
      {cards.map((card) => (
        <Link
          key={card.id}
          to={card.docPath}
          className={styles.cardLink}
        >
          <div className={styles.cardContainer}>
            <img 
              src={`/img/deck/${card.imageFilename}`} 
              alt={card.name}
              className={styles.cardImage}
            />
            <div className={styles.cardName}>
              {card.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Major Arcana
const MAJOR_ARCANA = [
  { id: 'm00', name: 'The Fool', imageFilename: 'm00.jpg', docPath: '/docs/cards/major-arcana/the-fool' },
  { id: 'm01', name: 'The Magician', imageFilename: 'm01.jpg', docPath: '/docs/cards/major-arcana/the-magician' },
  { id: 'm02', name: 'The High Priestess', imageFilename: 'm02.jpg', docPath: '/docs/cards/major-arcana/the-high-priestess' },
  { id: 'm03', name: 'The Empress', imageFilename: 'm03.jpg', docPath: '/docs/cards/major-arcana/the-empress' },
  { id: 'm04', name: 'The Emperor', imageFilename: 'm04.jpg', docPath: '/docs/cards/major-arcana/the-emperor' },
  { id: 'm05', name: 'The Hierophant', imageFilename: 'm05.jpg', docPath: '/docs/cards/major-arcana/the-hierophant' },
  { id: 'm06', name: 'The Lovers', imageFilename: 'm06.jpg', docPath: '/docs/cards/major-arcana/the-lovers' },
  { id: 'm07', name: 'The Chariot', imageFilename: 'm07.jpg', docPath: '/docs/cards/major-arcana/the-chariot' },
  { id: 'm08', name: 'Strength', imageFilename: 'm08.jpg', docPath: '/docs/cards/major-arcana/strength' },
  { id: 'm09', name: 'The Hermit', imageFilename: 'm09.jpg', docPath: '/docs/cards/major-arcana/the-hermit' },
  { id: 'm10', name: 'Wheel of Fortune', imageFilename: 'm10.jpg', docPath: '/docs/cards/major-arcana/wheel-of-fortune' },
  { id: 'm11', name: 'Justice', imageFilename: 'm11.jpg', docPath: '/docs/cards/major-arcana/justice' },
  { id: 'm12', name: 'The Hanged Man', imageFilename: 'm12.jpg', docPath: '/docs/cards/major-arcana/the-hanged-man' },
  { id: 'm13', name: 'Death', imageFilename: 'm13.jpg', docPath: '/docs/cards/major-arcana/death' },
  { id: 'm14', name: 'Temperance', imageFilename: 'm14.jpg', docPath: '/docs/cards/major-arcana/temperance' },
  { id: 'm15', name: 'The Devil', imageFilename: 'm15.jpg', docPath: '/docs/cards/major-arcana/the-devil' },
  { id: 'm16', name: 'The Tower', imageFilename: 'm16.jpg', docPath: '/docs/cards/major-arcana/the-tower' },
  { id: 'm17', name: 'The Star', imageFilename: 'm17.jpg', docPath: '/docs/cards/major-arcana/the-star' },
  { id: 'm18', name: 'The Moon', imageFilename: 'm18.jpg', docPath: '/docs/cards/major-arcana/the-moon' },
  { id: 'm19', name: 'The Sun', imageFilename: 'm19.jpg', docPath: '/docs/cards/major-arcana/the-sun' },
  { id: 'm20', name: 'Judgement', imageFilename: 'm20.jpg', docPath: '/docs/cards/major-arcana/judgement' },
  { id: 'm21', name: 'The World', imageFilename: 'm21.jpg', docPath: '/docs/cards/major-arcana/the-world' },
];

// Cups
const CUPS = [
  { id: 'c01', name: 'Ace of Cups', imageFilename: 'c01.jpg', docPath: '/docs/cards/minor-arcana/cups/ace-of-cups', category: 'cups' },
  { id: 'c02', name: 'Two of Cups', imageFilename: 'c02.jpg', docPath: '/docs/cards/minor-arcana/cups/two-of-cups', category: 'cups' },
  { id: 'c03', name: 'Three of Cups', imageFilename: 'c03.jpg', docPath: '/docs/cards/minor-arcana/cups/three-of-cups', category: 'cups' },
  { id: 'c04', name: 'Four of Cups', imageFilename: 'c04.jpg', docPath: '/docs/cards/minor-arcana/cups/four-of-cups', category: 'cups' },
  { id: 'c05', name: 'Five of Cups', imageFilename: 'c05.jpg', docPath: '/docs/cards/minor-arcana/cups/five-of-cups', category: 'cups' },
  { id: 'c06', name: 'Six of Cups', imageFilename: 'c06.jpg', docPath: '/docs/cards/minor-arcana/cups/six-of-cups', category: 'cups' },
  { id: 'c07', name: 'Seven of Cups', imageFilename: 'c07.jpg', docPath: '/docs/cards/minor-arcana/cups/seven-of-cups', category: 'cups' },
  { id: 'c08', name: 'Eight of Cups', imageFilename: 'c08.jpg', docPath: '/docs/cards/minor-arcana/cups/eight-of-cups', category: 'cups' },
  { id: 'c09', name: 'Nine of Cups', imageFilename: 'c09.jpg', docPath: '/docs/cards/minor-arcana/cups/nine-of-cups', category: 'cups' },
  { id: 'c10', name: 'Ten of Cups', imageFilename: 'c10.jpg', docPath: '/docs/cards/minor-arcana/cups/ten-of-cups', category: 'cups' },
  { id: 'c11', name: 'Page of Cups', imageFilename: 'c11.jpg', docPath: '/docs/cards/minor-arcana/cups/page-of-cups', category: 'cups' },
  { id: 'c12', name: 'Knight of Cups', imageFilename: 'c12.jpg', docPath: '/docs/cards/minor-arcana/cups/knight-of-cups', category: 'cups' },
  { id: 'c13', name: 'Queen of Cups', imageFilename: 'c13.jpg', docPath: '/docs/cards/minor-arcana/cups/queen-of-cups', category: 'cups' },
  { id: 'c14', name: 'King of Cups', imageFilename: 'c14.jpg', docPath: '/docs/cards/minor-arcana/cups/king-of-cups', category: 'cups' },
];

// Swords
const SWORDS = [
  { id: 's01', name: 'Ace of Swords', imageFilename: 's01.jpg', docPath: '/docs/cards/minor-arcana/swords/ace-of-swords', category: 'swords' },
  { id: 's02', name: 'Two of Swords', imageFilename: 's02.jpg', docPath: '/docs/cards/minor-arcana/swords/two-of-swords', category: 'swords' },
  { id: 's03', name: 'Three of Swords', imageFilename: 's03.jpg', docPath: '/docs/cards/minor-arcana/swords/three-of-swords', category: 'swords' },
  { id: 's04', name: 'Four of Swords', imageFilename: 's04.jpg', docPath: '/docs/cards/minor-arcana/swords/four-of-swords', category: 'swords' },
  { id: 's05', name: 'Five of Swords', imageFilename: 's05.jpg', docPath: '/docs/cards/minor-arcana/swords/five-of-swords', category: 'swords' },
  { id: 's06', name: 'Six of Swords', imageFilename: 's06.jpg', docPath: '/docs/cards/minor-arcana/swords/six-of-swords', category: 'swords' },
  { id: 's07', name: 'Seven of Swords', imageFilename: 's07.jpg', docPath: '/docs/cards/minor-arcana/swords/seven-of-swords', category: 'swords' },
  { id: 's08', name: 'Eight of Swords', imageFilename: 's08.jpg', docPath: '/docs/cards/minor-arcana/swords/eight-of-swords', category: 'swords' },
  { id: 's09', name: 'Nine of Swords', imageFilename: 's09.jpg', docPath: '/docs/cards/minor-arcana/swords/nine-of-swords', category: 'swords' },
  { id: 's10', name: 'Ten of Swords', imageFilename: 's10.jpg', docPath: '/docs/cards/minor-arcana/swords/ten-of-swords', category: 'swords' },
  { id: 's11', name: 'Page of Swords', imageFilename: 's11.jpg', docPath: '/docs/cards/minor-arcana/swords/page-of-swords', category: 'swords' },
  { id: 's12', name: 'Knight of Swords', imageFilename: 's12.jpg', docPath: '/docs/cards/minor-arcana/swords/knight-of-swords', category: 'swords' },
  { id: 's13', name: 'Queen of Swords', imageFilename: 's13.jpg', docPath: '/docs/cards/minor-arcana/swords/queen-of-swords', category: 'swords' },
  { id: 's14', name: 'King of Swords', imageFilename: 's14.jpg', docPath: '/docs/cards/minor-arcana/swords/king-of-swords', category: 'swords' },
];

// Wands
const WANDS = [
  { id: 'w01', name: 'Ace of Wands', imageFilename: 'w01.jpg', docPath: '/docs/cards/minor-arcana/wands/ace-of-wands', category: 'wands' },
  { id: 'w02', name: 'Two of Wands', imageFilename: 'w02.jpg', docPath: '/docs/cards/minor-arcana/wands/two-of-wands', category: 'wands' },
  { id: 'w03', name: 'Three of Wands', imageFilename: 'w03.jpg', docPath: '/docs/cards/minor-arcana/wands/three-of-wands', category: 'wands' },
  { id: 'w04', name: 'Four of Wands', imageFilename: 'w04.jpg', docPath: '/docs/cards/minor-arcana/wands/four-of-wands', category: 'wands' },
  { id: 'w05', name: 'Five of Wands', imageFilename: 'w05.jpg', docPath: '/docs/cards/minor-arcana/wands/five-of-wands', category: 'wands' },
  { id: 'w06', name: 'Six of Wands', imageFilename: 'w06.jpg', docPath: '/docs/cards/minor-arcana/wands/six-of-wands', category: 'wands' },
  { id: 'w07', name: 'Seven of Wands', imageFilename: 'w07.jpg', docPath: '/docs/cards/minor-arcana/wands/seven-of-wands', category: 'wands' },
  { id: 'w08', name: 'Eight of Wands', imageFilename: 'w08.jpg', docPath: '/docs/cards/minor-arcana/wands/eight-of-wands', category: 'wands' },
  { id: 'w09', name: 'Nine of Wands', imageFilename: 'w09.jpg', docPath: '/docs/cards/minor-arcana/wands/nine-of-wands', category: 'wands' },
  { id: 'w10', name: 'Ten of Wands', imageFilename: 'w10.jpg', docPath: '/docs/cards/minor-arcana/wands/ten-of-wands', category: 'wands' },
  { id: 'w11', name: 'Page of Wands', imageFilename: 'w11.jpg', docPath: '/docs/cards/minor-arcana/wands/page-of-wands', category: 'wands' },
  { id: 'w12', name: 'Knight of Wands', imageFilename: 'w12.jpg', docPath: '/docs/cards/minor-arcana/wands/knight-of-wands', category: 'wands' },
  { id: 'w13', name: 'Queen of Wands', imageFilename: 'w13.jpg', docPath: '/docs/cards/minor-arcana/wands/queen-of-wands', category: 'wands' },
  { id: 'w14', name: 'King of Wands', imageFilename: 'w14.jpg', docPath: '/docs/cards/minor-arcana/wands/king-of-wands', category: 'wands' },
];

// Pentacles
const PENTACLES = [
  { id: 'p01', name: 'Ace of Pentacles', imageFilename: 'p01.jpg', docPath: '/docs/cards/minor-arcana/pentacles/ace-of-pentacles', category: 'pentacles' },
  { id: 'p02', name: 'Two of Pentacles', imageFilename: 'p02.jpg', docPath: '/docs/cards/minor-arcana/pentacles/two-of-pentacles', category: 'pentacles' },
  { id: 'p03', name: 'Three of Pentacles', imageFilename: 'p03.jpg', docPath: '/docs/cards/minor-arcana/pentacles/three-of-pentacles', category: 'pentacles' },
  { id: 'p04', name: 'Four of Pentacles', imageFilename: 'p04.jpg', docPath: '/docs/cards/minor-arcana/pentacles/four-of-pentacles', category: 'pentacles' },
  { id: 'p05', name: 'Five of Pentacles', imageFilename: 'p05.jpg', docPath: '/docs/cards/minor-arcana/pentacles/five-of-pentacles', category: 'pentacles' },
  { id: 'p06', name: 'Six of Pentacles', imageFilename: 'p06.jpg', docPath: '/docs/cards/minor-arcana/pentacles/six-of-pentacles', category: 'pentacles' },
  { id: 'p07', name: 'Seven of Pentacles', imageFilename: 'p07.jpg', docPath: '/docs/cards/minor-arcana/pentacles/seven-of-pentacles', category: 'pentacles' },
  { id: 'p08', name: 'Eight of Pentacles', imageFilename: 'p08.jpg', docPath: '/docs/cards/minor-arcana/pentacles/eight-of-pentacles', category: 'pentacles' },
  { id: 'p09', name: 'Nine of Pentacles', imageFilename: 'p09.jpg', docPath: '/docs/cards/minor-arcana/pentacles/nine-of-pentacles', category: 'pentacles' },
  { id: 'p10', name: 'Ten of Pentacles', imageFilename: 'p10.jpg', docPath: '/docs/cards/minor-arcana/pentacles/ten-of-pentacles', category: 'pentacles' },
  { id: 'p11', name: 'Page of Pentacles', imageFilename: 'p11.jpg', docPath: '/docs/cards/minor-arcana/pentacles/page-of-pentacles', category: 'pentacles' },
  { id: 'p12', name: 'Knight of Pentacles', imageFilename: 'p12.jpg', docPath: '/docs/cards/minor-arcana/pentacles/knight-of-pentacles', category: 'pentacles' },
  { id: 'p13', name: 'Queen of Pentacles', imageFilename: 'p13.jpg', docPath: '/docs/cards/minor-arcana/pentacles/queen-of-pentacles', category: 'pentacles' },
  { id: 'p14', name: 'King of Pentacles', imageFilename: 'p14.jpg', docPath: '/docs/cards/minor-arcana/pentacles/king-of-pentacles', category: 'pentacles' },
];