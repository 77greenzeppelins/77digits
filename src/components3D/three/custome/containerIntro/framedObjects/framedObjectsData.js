import { springConfigs } from '../../../../../data/reactSpring';
import venus from '../../../../../assets/textures/venus_1.webp';

/*
------------------------------------------------------------------------
*/
const basicMoveConfig = {
  target: window,
  tillFactor: 0.03,
};

const springConfig = {
  /*
  Data for basic z-axis animation
  */
  configBasic: springConfigs.configBasic,
  positionStart: [0, 0, -2],
  positionEnd: [0, 0, 0],
  delay: 400,
};

const venusGestureConfiguration = {
  rightDragLimitX: 0.25,
  leftDragLimitX: 0.25,
  rightDragLimitY: 1,
  leftDragLimitY: -1,
};
const bannerGestureConfiguration = {
  rightDragLimitX: -0.25,
  leftDragLimitX: -0.25,
  rightDragLimitY: 1,
  leftDragLimitY: -1,
};

const venusInFrameData = {
  groupProps: {
    name: 'GroupForVenusInFrame',
    position: [0, 0.03, 0.4],
    scale: [0.8, 0.8, 0.8],
  },
  canvasProps: { image: venus, format: 'portrait' },
  frameProps: {
    groupProps: { name: 'groupForFrameOfVenusInFrame' },
    format: 'portrait',
  },
};

const scrollBannerData = {
  groupProps: {
    name: 'GroupForScrollOrDragFrame',
    position: [0, -0.69, -0.3],
    scale: [0.6, 0.6, 0.6],
  },
  frameProps: {
    format: 'banner',
  },
  canvasProps: {
    format: 'banner',
  },
};

const venusSideLeftText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForTheBirthOf77digits',
    rotation: [0, -Math.PI * 0.45, -Math.PI * 0.5],
    position: [-0.34, 0, -0.07],
  },
  fontSize: { fontSmall: 0.02, fontMedium: 0.03, fontLarge: 0.03 },
  textOrientation: 'vertical',
  textWidthFactor: 10,
  textLinePl: '"Narodziny  77digits"...  Dziękuję Sandro za inspirację...',
  textLineEn: '"The Birth of 77digits"... Thanks Sandro for inspiration...',
};

const bannerFrontText = {
  /*
  Pl
  */
  textLinesPl: ['przesuń lub skroluj', 'góra / dół'],
  textPropsPl: [{ position: [0, 0.06, 0.02] }, { position: [0, -0.04, 0.02] }],
  fontPl: ['jost', 'jost'],
  // font: 'garamont',
  fontSizePl: [
    { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
    { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
  ],
  strokeWidthPl: [0.0005, 0.0005],
  maxWidthFactorPl: [0.01, 0.01],
  /*
En
  */
  textLinesEn: ['scroll or drag', 'to explore'],
  textPropsEn: [{ position: [0, 0.06, 0.02] }, { position: [0, -0.04, 0.02] }],
  fontEn: ['jost', 'jost'],
  fontSizeEn: [
    { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
    { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
  ],
  strokeWidthEn: [0.0005, 0.0005],
  maxWidthFactorEn: [5, 5],
};

const bannerLeftText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForBannerLeftText',
    position: [-0.5, 0, -0.25],
    rotation: [-Math.PI * 0.5, -Math.PI * 0.5, -Math.PI * 0.5],
  },
  /*
  "textProps" => no need to specify it as "textWidthFactor" creates as many lines as words in "textLinesPl" / "textLinesEn"
  */
  fontSize: { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
  textLinePl: 'przesuwaj na urządzeniu dotykowym',
  textLineEn: 'drag on touch devices',
  textWidthFactor: 50,
  strokeWidth: 0.0005,
};

const bannerRightText = {
  /*
  configuration for <TextSlide>
  */
  name: 'groupForBannerRightText',
  groupProps: {
    position: [0.5, 0, -0.23],
    rotation: [0, Math.PI * 0.5, 0],
  },
  /*
  "textProps" => no need to specify it as "textWidthFactor" creates as many lines as words in "textLinesPl" / "textLinesEn"
  */
  fontSize: { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.065 },
  textLinePl: 'skroluj myszką',
  textLineEn: 'scroll on desktop',
  textWidthFactor: 50,
  strokeWidth: 0.0005,
};

export {
  basicMoveConfig,
  springConfig,
  venusGestureConfiguration,
  bannerGestureConfiguration,
  venusInFrameData,
  scrollBannerData,
  venusSideLeftText,
  bannerFrontText,
  bannerLeftText,
  bannerRightText,
};
