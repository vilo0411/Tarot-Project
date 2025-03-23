import React, { useState } from 'react';
import styles from './SoundControl.module.css';

function SoundControl() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    // Lưu trạng thái vào localStorage để giữ nguyên setting
    localStorage.setItem('tarotSoundMuted', !isMuted);
  };

  return (
    <button 
      className={styles.soundButton}
      onClick={toggleSound}
      title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
}

export default SoundControl; 