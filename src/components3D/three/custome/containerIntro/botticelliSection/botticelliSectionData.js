import { springConfigs } from '../../../../../data/reactSpring';
import venus from '../../../../../assets/textures/containerIntro_venus_445_800_1.webp';

const basicMoveConfig = {
  /*
  Data for gesture's "BasicMove.js" animation
  */
  target: window,
  tillFactorX: 0.3,
  tillFactorY: 0.1,
};

const springConfig = {
  /*
  Data for basic z-axis animation
  */
  configBasic: springConfigs.configBasic,
  positionStart: [0, -0.15, -1.5],
  positionEnd: [0, -0.01, 0],
  scaleStart: [0.8, 0.8, 0.8],
  scaleEnd: [1, 1, 1],
  rotationStart: [0, Math.PI * -0.1, 0],
  rotationEnd: [0, 0, 0],
  delay: 400,
};

const venusGestureConfig = {
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
  meshProps: { position: [0, 0, 0], scale: [1, 1, 1] },
  format: 'verticalFormat',
  image: venus,
};

const venusLeftSideTextConfig = {
  /*
  configuration for <TextSlide>
  */
  textProps: {
    name: 'groupForTheBirthOf77digits',
    rotation: [0, -Math.PI * 0.45, -Math.PI * 0.5],
    position: [-0.43, 0, -0.05],
  },
  text: [
    '"Narodziny  77digits"...  Dziękuję Sandro za inspirację...',
    '"The Birth of 77digits"... Thanks Sandro for inspiration...',
  ],
  fontSize: [0.03, 0.035, 0.033],
  textOrientation: 'vertical',
  maxWidthValue: 1.5,
  letterSpacing: 0.1,
  lineHeight: 1.5,
};
const logoConfig = {
  position: [0.25, -0.1, 0.11],
  rotation: [0, -0.15 * Math.PI, -0.05 * Math.PI],
  scale: [0.4, 0.4, 0.4],
};

export {
  basicMoveConfig,
  springConfig,
  venusPaintingData,
  venusLeftSideTextConfig,
  venusGestureConfig,
  logoConfig,
};
