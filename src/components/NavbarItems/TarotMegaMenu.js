import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import './TarotMegaMenu.css';

export default function TarotMegaMenu({ className, label, items }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();

  const navigateTo = (href) => {
    history.push(href);
    setShowDropdown(false);
  };

  return (
    <div
      className="tarot-navbar-item"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <span className="tarot-navbar-link">{label}</span>
      {showDropdown && (
        <div className="tarot-mega-dropdown">
          <div className="tarot-mega-content">
            {items.map((section, idx) => (
              <div key={idx} className="tarot-section">
                <h3 className="tarot-section-title">{section.title}</h3>
                <ul className="tarot-link-list">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="tarot-link-item">
                      <a 
                        className="tarot-link"
                        onClick={() => navigateTo(item.href)}
                      >
                        <span className="tarot-icon">{item.icon}</span>
                        <span className="tarot-label">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}