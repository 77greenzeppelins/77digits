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
  tileFactor: 0.2,
};
// const answerSectionGesturesConfig{

// }

const raphaelPaintingData = {
  /*
  Basic data for <UniversalFrame> & <UniversalCanvas>
  */
  texture: raphaelPainting,
  format: 'portrait',
  groupProps: { position: [0, -0.15, -0.05] },
};

const raphaelPaintingGesture = {
  /*
  Data for "BasicMove" 
  */
  tillFactor: 0.15,
};

const raphaelPaintingLeftText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForTheBirthOf77digits',
    rotation: [0, -Math.PI * 0.45, -Math.PI * 0.5],
    position: [-0.32, 0, -0.07],
  },
  fontSize: { fontSmall: 0.02, fontMiddle: 0.03, fontLarge: 0.03 },
  textOrientation: 'vertical',
  textWidthFactor: 10,
  textLinePl: 'Drogi Platonie i Arystotelesie! Liczę na waszą wyrozumiałość...',
  textLineEn: 'Dear Plato and Aristotles! I count on your understanding...',
};

const philosophersAnswers = {
  groupProps: { position: [0, 0.15, -0.05] },
};
const philosophersAnswersGesture = {
  /*
  Data for "BasicMove" 
  */
  tillFactor: 0.29,
};

/*
Platon Answer
*/

const PlatonAnswerGroup = {
  groupProps: {
    position: [-0.199, 0.3, 0.14],
  },
};

const PlatoAnswerFrame = {
  format: 'portrait',
  groupProps: {
    scale: [0.4, 0.4, 0.4],
    rotation: [Math.PI * 0.2, 0, Math.PI * 0.5],
    position: [0, -0.01, 0.05],
  },
};

const PlatoAnswerText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForAristotlesAnswerText',
    rotation: [Math.PI * 0.2, 0, 0],
    position: [0, -0.01, 0.05],
  },
  /*
  "textProps" => no need to specify it as "textWidthFactor" creates as many lines as words in "textLinesPl" / "textLinesEn"
  */
  fontSize: { fontSmall: 0.03, fontMiddle: 0.035, fontLarge: 0.04 },
  textAlign: 'center',
  textLinePl: 'Mam ochotę odlecieć... Dzwonię!',
  textLineEn: "Let's take-off",
  /*
  low factor means narrow width
  */
  textWidthFactor: 50,
};

const PlatoCone = {
  args: [0.009, 0.19, 16],
  meshProps: {
    rotation: [1.1 * Math.PI, 0, 0],
    position: [0.1, -0.198, -0.075],
  },
};

/*
Aristotles Answer
*/

const AristotlesAnswerGroup = {
  groupProps: {
    position: [0.199, 0.3, 0.14],
  },
};

const AristotlesAnswer = {
  format: 'portrait',
  groupProps: {
    position: [0, -0.01, 0.05],
    scale: [0.4, 0.4, 0.4],
    rotation: [Math.PI * 0.15, 0, Math.PI * 0.5],
  },
};
const AristotlesAnswerText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForAristotlesAnswerText',
    position: [0, -0.01, 0.05],
    rotation: [Math.PI * 0.15, 0, Math.PI * 0.5],
  },
  /*
  "textProps" => no need to specify it as "textWidthFactor" creates as many lines as words in "textLinesPl" / "textLinesEn"
  */
  fontSize: { fontSmall: 0.05, fontMiddle: 0.06, fontLarge: 0.065 },
  textAlign: 'center',
  textLinePl: 'Mam inne plany...',
  textLineEn: '...  ...  ....',
  /*
  low factor means narrow width
  */
  textWidthFactor: 50,
};
const AristotlesCone = {
  args: [0.009, 0.19, 16],
  meshProps: {
    rotation: [1.1 * Math.PI, 0, 0],
    position: [-0.1, -0.198, -0.075],
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
  raphaelPaintingData,
  raphaelPaintingGesture,
  raphaelPaintingLeftText,
  philosophersAnswers,
  philosophersAnswersGesture,
  //_____for Plato
  PlatonAnswerGroup,
  PlatoAnswerFrame,
  PlatoAnswerText,
  PlatoCone,
  //_____for Aristotles
  AristotlesAnswerGroup,
  AristotlesAnswer,
  AristotlesAnswerText,
  AristotlesCone,
  //___Reset Button
  buttonX,
};
