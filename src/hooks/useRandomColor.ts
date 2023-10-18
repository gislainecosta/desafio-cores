import { useState } from 'react';

export default function useRandomColor() {
  const [colors, setColors] = useState<string[]>([]);
  const [correctColor, setCorrectColor] = useState<string>('');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    const randomColors = [];

    for (let i = 0; i < 3; i++) {
      let color = '#';

      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      randomColors.push(color);

      setColors(randomColors);
      setCorrectColor(randomColors[Math.floor(Math.random() * 3)]);
    }
  };

  return { colors, correctColor, generateRandomColor };
}
