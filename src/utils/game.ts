export const getBrightness = (hexColor: string) => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness < 127.5 ? '#eff1f0' : '#1c1f30';
};

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  const randomColors = [];
  for (let i = 0; i < 3; i++) {
    let color = '#';

    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    randomColors.push(color);

    const correctColor = randomColors[Math.floor(Math.random() * 3)];

    return { randomColors, correctColor };
  }
};
