import { springConfigs } from '../../../../../data/reactSpring';
// import venus from '../../../../../assets/textures/venus_1.webp';
import venus from '../../../../../assets/textures/containerIntro_venus_445_800_1.webp';

const basicMoveConfig = {
  /*
  Data for gesture's "BasicMove.js" animation
  */
  target: window,
  tillFactor: 0.1,
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

const venusPaintingData = {
  groupProps: {
    name: 'GroupForVenusInFrame',
    position: [0, 0.02, 0.4],
    scale: [0.6, 0.6, 0.6],
  },
  canvasProps: { image: venus, format: 'verticalFormat' },
  frameProps: {
    groupProps: { name: 'groupForFrameOfVenusInFrame' },
    format: 'verticalFormat',
  },
};

const venusSideLeftText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForTheBirthOf77digits',
    rotation: [0, -Math.PI * 0.45, -Math.PI * 0.5],
    position: [-0.44, 0, -0.07],
  },
  fontSize: { fontSmall: 0.02, fontMedium: 0.03, fontLarge: 0.03 },
  textOrientation: 'vertical',
  textWidthFactor: 10,
  textLinePl: '"Narodziny  77digits"...  Dziękuję Sandro za inspirację...',
  textLineEn: '"The Birth of 77digits"... Thanks Sandro for inspiration...',
};

export {
  basicMoveConfig,
  springConfig,
  venusPaintingData,
  venusSideLeftText,
  venusGestureConfiguration,
};
