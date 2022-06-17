/*
Instant Contact Buttons
*/
const businessMail = 'mailto:77greenzeppelins@gmail.com';
const businessPhone = 'tel:798-905-558';
/*
Container Intro
*/
const onWheelData = { top: 0, bottom: 3790 };
const onDragData = { top: 0, bottom: 3700 };

const factorPositionY = 0.005;
/*
Container About
Used in: (1) ContAboutNavGest.js to prevent infinite wheeling/dragging; (2) 
*/
const contAboutSlidesNumber = 5;

const globalPositionData = {
  introContainerPosition: [0, 0, 0],
  introContainerCameraPosition: [0, 0, 2],

  aboutContainerPosition: [-5, 0, 0],
  aboutContainerCameraPosition: [-5, 0, 1],

  menuContainerPosition: [5, 0, 0],
  menuContainerCameraPosition: [5, 0, 2],

  raphaelContainerPosition: [0, 5, 0],
  raphaelContainerCameraPosition: [0, 5, 2],

  defaultContainerPosition: [0, -5, 0],
  defaultContainerCameraPosition: [0, -5, 2],
};

/*
Data used in  <PlaneForCanvas> 
How It was calculated:
 width: 420px / height: 1000px; ratio = 0.42
const verticalFormatWidthSize = 0.77;
const verticalFormatHeightSize = 1.38;
*/
const portraitWidthSize = 0.58;
const portraitHeightSize = 0.78;

const verticalFormatWidthSize = 0.77;
const verticalFormatHeightSize = 1.38;

// const finger1WidthSize =
/*
Data used in  <UniversalCanvas> 
*/
const sizeFactor = 0.02;

/*
RGB is required by react-fast-marque's "gradientColor" property;
*/
const colorsPalette = {
  //___Canvas Color / Fog
  darkHexadecimal: 0x000000,
  linenHexadecimal: 0xf1efe9,
  linenRGB: [241, 239, 233], //hsl(45,22%,92%)
  darkGoldenRodHexadecimal: 0xa48417,
  // antiqueWhiteHexadecimal: 0xf7e6d2,
  //___Venus Sky
  venusSky: '2b6873',
  venusSkyRGB: [43, 104, 115],
  venusSkyRGBstring: 'rgb(43, 104, 115)',
  venusSkyHexadecimal: 0x2b6873,
  venusSkyForShader: [0.168, 0.407, 0.45],
  venusSkyHSL: [0.53, 0.46, 0.31],
};

const springConfigs = {
  configBasic: { mass: 10, tension: 70, friction: 30 },
  molasses: { mass: 1, tension: 280, friction: 120 },
  default: { mass: 1, tension: 170, friction: 26 },
};

export {
  /*
  drei / cameras / navSection / ...
  */
  businessMail,
  businessPhone,
  /*
  three / gestures / 
  */
  onWheelData,
  onDragData,
  factorPositionY,
  //
  contAboutSlidesNumber,
  globalPositionData,
  colorsPalette,
  //
  portraitWidthSize,
  portraitHeightSize,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  sizeFactor,
  //
  springConfigs,
};

/*
--------------------------------------------------------------------
*/
// const bannerWidthSize = 0.98;
// const bannerHeightSize = 0.38;

// const columnWidthSize = 0.58;
// const columnHeightSize = 1.38;

//___
// p1veryLightBlue: '#bbdef1',
// p1brown: '#4f2f14',
// p1brownRGB: [79, 47, 20],
// p2intensiveBlue: '#0624d9',
// p2intensiveBlueRGB: [6, 36, 217],
// p3YellowAsGold: '#ffc400',
// p3YellowAsGoldRGB: [255, 196, 0],
// p3BritishRacingGreen: '#004225',
// p3BritishRacingGreenRGB: [0, 66, 37],
// p4royalBlue: '#105de1',
// p4royalBlueRGB: [16, 93, 225],
// p4antiqueWhite: '#f7e6d2',
// p4antiqueWhiteRGB: [247, 230, 210],
// //strongContrast
// p5indianRed: '#c04071',
// p5indianRedRGB: [192, 64, 113],
// p5shaddyPink: '#940a3d',
// p5shaddyPinkRGB: [148, 10, 61],
// p5darkGoldenRod: '#a48417',
// p5darkGoldenRodRGB: [164, 132, 23],
//grey
// someGray: '#2f2f2f',
// someGray_2: '#2b2b2b',
