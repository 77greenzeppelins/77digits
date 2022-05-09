import raphaelPainting from '../../../../../assets/textures/PlatoAndAristoteles.jpg';
import { springConfigs } from '../../../../../data/reactSpring';
/*
------------------------------------------------------------------
*/
const raphaelSectionSpringConfig = {
  /*
  Data for basic z-axis animation
  */
  configBasic: springConfigs.configBasic,
  positionStart: [0, 0, -21],
  positionEnd: [0, 0, -19.64],
  delay: 400,
};

const raphaelSectionGesturesConfig = {
  /*
  props for "DragRotateReturn"
  */
  rotationX: -Math.PI * 0.18,
  rightDragLimitX: -0.15,
  leftDragLimitX: -0.15,
  rightDragLimitY: 1,
  leftDragLimitY: -1,
  // tileFactor: 0.2,
};

const raphaelPaintingConfig = {
  /*
  Basic data for <UniversalFrame> & <UniversalCanvas>
  */
  texture: raphaelPainting,
  format: 'portrait',
  groupProps: { position: [0, -0.15, -0.05] },
  /*
  Basic data for "BasicMove.js"
  */
  gestureTillFactor: 0.15,
};

const raphaelPaintingLeftTextConfig = {
  /*
  configuration for <TextSlide>
  */
  textProps: {
    name: 'groupForRaphaelPaintingLeftText',
    rotation: [0, -Math.PI * 0.45, -Math.PI * 0.5],
    position: [-0.32, 0, -0.07],
  },
  text: [
    'Dear Plato and Aristotles! I count on your understanding...',
    'Drogi Platonie i Arystotelesie! Liczę na waszą wyrozumiałość...',
  ],
  fontSize: [0.02, 0.03, 0.03],
  lineHeight: 1.5,
  maxWidthValue: 0.7,
};

const philosophersAnswersConfig = {
  groupProps: {
    position: [0, 0.4, 0.25],
  },
  tillFactor: 0.2,
};

/*
Platon Answer
*/
const PlatonAnswerGroup = {
  groupProps: {
    position: [-0.199, 0, 0],
    rotation: [0.2 * Math.PI, 0, 0],
  },
};

const PlatoAnswerFrame = {
  format: 'portrait',
  groupProps: {
    scale: [0.4, 0.4, 0.4],
    rotation: [0, 0, Math.PI * 0.5],
  },
};

const PlatoAnswerTextConfig = {
  /*
  configuration for <DreiText>
  */
  textProps: {
    name: 'DraiTextForPlatoAnswerText',
  },
  text: [
    "I want to take-off... Let's call!",
    'Mam ochotę odlecieć... Dzwonię!',
  ],
  fontSize: [0.03, 0.035, 0.04],
  lineHeight: 1.5,
  textAlign: 'center',
  maxWidthValue: 0.3, //large factor means narrow width
};

const PlatoCone = {
  args: [0.009, 0.19, 16],
  meshProps: {
    rotation: [Math.PI, 0, 0],
    position: [0.1, -0.22, 0],
  },
};

/*
Aristotles Answer
*/

const AristotlesAnswerGroup = {
  groupProps: {
    position: [0.199, 0, 0],
    rotation: [0.2 * Math.PI, 0, 0],
  },
};

const AristotlesAnswer = {
  format: 'portrait',
  groupProps: {
    scale: [0.4, 0.4, 0.4],
    rotation: [0, 0, Math.PI * 0.5],
  },
};

const AristotlesTextConfig = {
  /*
  configuration for <DreiText>
  */
  textProps: {
    name: 'DraiTextForAristotlesAnswerText',
  },
  text: ["I'd rather write... Briefly...", 'Ja raczej  napiszę! Zwięźle...'],
  fontSize: [0.03, 0.035, 0.04],
  lineHeight: 1.5,
  textAlign: 'center',
  maxWidthValue: 0.3, //large factor means narrow width
};

const AristotlesCone = {
  args: [0.009, 0.19, 16],
  meshProps: {
    rotation: [Math.PI, 0, 0],
    position: [-0.1, -0.22, 0],
  },
};

/*
Close Button
*/
const buttonX = {
  groupProps: {
    scale: [0.12, 0.12, 0.12],
    position: [0, -0.75, 0],
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
  raphaelSectionSpringConfig,
  raphaelSectionGesturesConfig,
  raphaelPaintingConfig,
  raphaelPaintingLeftTextConfig,
  philosophersAnswersConfig,
  //_____for Plato
  PlatoAnswerTextConfig,
  PlatonAnswerGroup,
  PlatoAnswerFrame,
  PlatoCone,
  //_____for Aristotles
  AristotlesAnswerGroup,
  AristotlesAnswer,
  AristotlesTextConfig,
  AristotlesCone,
  //___Reset Button
  buttonX,
};
