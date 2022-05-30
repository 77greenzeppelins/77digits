import { springConfigs } from '../../../../../data/reactSpring';
/*
------------------------------------------------------------------------
*/
const springConfig = {
  configBasic: springConfigs.configBasic,
  zStart: -20.64,
  zEnd: -18.64,
  yStart: 0,
  yEnd: 2,
  // delay: 200,
};
const InstantContactButtonPhone = {
  groupProps: {
    scale: [0.335, 0.335, 0.335],
    position: [0, 0.2, 0],
    rotation: [0, 0.1 * Math.PI, 0],
  },
  canvasProps: { buttonType: 'phone', format: 'portrait' },
};
const InstantContactButtonEmail = {
  groupProps: {
    scale: [0.335, 0.335, 0.335],
    position: [0, -0.2, 0],
    rotation: [0, 0.1 * Math.PI, 0],
  },
  canvasProps: { buttonType: 'email', format: 'portrait' },
};

const resetButtonFrame = {
  groupProps: { scale: [0.25, 0.25, 0.25], position: [0, 0, -0.5] },
  frameProps: { format: 'banner' },
};

const resetButtonTextSlide = {
  groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
  textProps: { position: [0, 0, 0] },
  font: 'garamont',
  fontSize: { fontSmall: 0.09, fontMiddle: 0.1, fontLarge: 0.15 },
  // whiteSpace: "nowrap",
  textLinePl: 'wielki reset',
  textLineEn: 'reset',
};

const buttonQuestionMark = {
  groupProps: {
    scale: [0.12, 0.12, 0.12],
    position: [0.18, -0.4, 0], // [x,yEnd,yStart,z]
  },
  fontExtrudeSettings: {
    size: 0.7,
    height: 0.03,
    bevelEnabled: true,
    curveSegments: 2,
    bevelThickness: 0.01,
    bevelSize: 0.005,
  },
  text: '?',
};

const buttonX = {
  groupProps: {
    scale: [0.09, 0.09, 0.09],
    position: [-0.003, -0.035, 0], // [x,yEnd,yStart,z]
  },
  meshProps: { rotation: [0, 0, 0.25 * Math.PI] },
  fontExtrudeSettings: {
    size: 0.7,
    height: 0.03,
    bevelEnabled: true,
    curveSegments: 2,
    bevelThickness: 0.01,
    bevelSize: 0.005,
  },
  text: '+',
};

export {
  springConfig,
  InstantContactButtonPhone,
  InstantContactButtonEmail,
  resetButtonFrame,
  resetButtonTextSlide,
  buttonQuestionMark,
  buttonX,
};

// positionZStart: [0, 0, -20.64],
// positionZEnd: [0, 0, -18.64],
// positionYStart: [0, 0, 0],
// positionYEnd: [0, 2, 0],
