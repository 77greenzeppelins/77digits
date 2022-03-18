const backgroundColors = {
  containerAbout: 0x000000,
  containerIntro: 0x000000,
  containerMenu: 0x348013,
  brown: 0x4f2f14,
  veryLightBlue: 0xbbdef1,
  intensiveBlue: 0x0624d9,
  BritishRacingGreen: 0x004225,
  default: 0x000000,
  //
  antiqueWhite: 0xf7e6d2,
  //
  darkGoldenRod: 0xa48417,
};

/*
RGB is required by react-fast-marque's "gradientColor" property;
*/
const colorsPalette = {
  p1veryLightBlue: '#bbdef1',
  p1brown: '#4f2f14',
  p1brownRGB: [79, 47, 20],

  p2intensiveBlue: '#0624d9',
  p2intensiveBlueRGB: [6, 36, 217],

  p3YellowAsGold: '#ffc400',
  p3YellowAsGoldRGB: [255, 196, 0],
  p3BritishRacingGreen: '#004225',
  p3BritishRacingGreenRGB: [0, 66, 37],

  p4royalBlue: '#105de1',
  p4royalBlueRGB: [16, 93, 225],
  p4antiqueWhite: '#f7e6d2',
  p4antiqueWhiteRGB: [247, 230, 210],

  //strongContrast
  p5indianRed: '#c04071',
  p5indianRedRGB: [192, 64, 113],
  p5shaddyPink: '#940a3d',
  p5shaddyPinkRGB: [148, 10, 61],
  p5darkGoldenRod: '#a48417',
  p5darkGoldenRodRGB: [164, 132, 23],
};

export { backgroundColors, colorsPalette };
