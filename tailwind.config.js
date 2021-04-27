module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blueRoyal: '#3023ae',
        greenMoving: '#30b94a',
        redPink: '#F3006F',
        darkBG: '#181818',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active', 'focus'],
    },
  },
};
