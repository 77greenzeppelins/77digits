/*
Instant Contact Buttons
*/
const businessMail = 'mailto:77greenzeppelins@gmail.com';
const businessPhone = 'tel:798-905-558';
/*
Container About
*/
const contAboutSlidesNumber = 5;

const globalPositionData = {
  defaultContainerPosition: [0, -5, 0],
  defaultContainerCameraPosition: [0, -5, 2],

  introContainerPosition: [0, 0, 0],
  introContainerCameraPosition: [0, 0, 2],

  aboutContainerPosition: [-5, 0, 0],
  aboutContainerCameraPosition: [-5, 0, 1],

  menuContainerPosition: [5, 0, 0],
  menuContainerCameraPosition: [5, 0, 2],
};

/*
used in src / pages / <PageMain>
*/
const backgroundColors = {
  containerAbout: 0x000000,
  containerIntro: 0x000000,
  containerMenu: 0x348013,
  brown: 0x4f2f14,
  veryLightBlue: 0xbbdef1,
  intensiveBlue: 0x0624d9,
  BritishRacingGreen: 0x004225,
  default: 0x000000,
  /*
  around white...
  */
  antiqueWhite: 0xf7e6d2,
  linen: 0xf1efe9, //hsl(45,22%,92%); rgb(241,239,233);
  someGray: 0x2f2f2f, //#2f2f2f
  someGray_2: 0x2b2b2b, //#2b2b2b
  //
  darkGoldenRod: 0xa48417,
};

/*
RGB is required by react-fast-marque's "gradientColor" property;
*/
const colorsPalette = {
  //___Venus Sky
  venusSky: '2b6873',
  venusSkyRGB: [43, 104, 115],
  venusSkyRGBstring: 'rgb(43, 104, 115)',
  venusSkyHexadecimal: 0x2b6873,

  //___
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

  //grey
  someGray: '#2f2f2f',
  someGray_2: '#2b2b2b',
};

/*
Formats for Canvas & Frames
  portraitWidthSize,
  portraitHeightSize,

 bannerWidthSize,
  bannerHeightSize,

  columnWidthSize,
  columnHeightSize,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  sizeFactor,
*/
const portraitWidthSize = 0.58;
const portraitHeightSize = 0.78;

const bannerWidthSize = 0.98;
const bannerHeightSize = 0.38;

const columnWidthSize = 0.58;
const columnHeightSize = 1.38;

const verticalFormatWidthSize = 0.77;
const verticalFormatHeightSize = 1.38;

/*
Data used in  <UniversalCanvas> 
*/
const sizeFactor = 0.02;

export {
  businessMail,
  businessPhone,
  contAboutSlidesNumber,
  globalPositionData,
  backgroundColors,
  colorsPalette,
  //
  portraitWidthSize,
  portraitHeightSize,
  bannerWidthSize,
  bannerHeightSize,
  columnWidthSize,
  columnHeightSize,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  sizeFactor,
};
