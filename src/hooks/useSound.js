import { useCallback } from 'react';

export const useSound = () => {
  const playSound = useCallback((soundPath) => {
    // Trong Docusaurus, đường dẫn sẽ bắt đầu từ thư mục static
    const audio = new Audio(soundPath);
    audio.volume = 0.3; // Giảm volume xuống một chút để không quá to

    try {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Không thể phát âm thanh:', error);
        });
      }
    } catch (error) {
      console.log('Lỗi khi phát âm thanh:', error);
    }
  }, []);

  return { playSound };
}; 