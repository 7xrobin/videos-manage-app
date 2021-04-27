module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blueRoyal: '#3023ae',
        blueRoyalLight: '#3622FF',
        greenMoving: '#30b94a',
        greenLight: '#9EFAAE',
        redPink: '#F3006F',
        darkBG: '#353535',
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
