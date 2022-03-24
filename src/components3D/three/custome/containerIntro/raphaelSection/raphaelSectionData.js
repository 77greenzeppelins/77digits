import raphaelPainting from '../../../../../assets/textures/PlatoAndAristoteles.jpg';

/*
------------------------------------------------------------------
*/
const raphaelSectionSpringConfig = {
  /*
    just to move on z-axis when user clicks "auxiliaryButtons"
    */
  positionZStart: [0, 0, -20.64],
  positionZEnd: [0, 0, -18.64],
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

const PlatoAnswer = {
  format: 'portrait',
  groupProps: {
    position: [-0.199, 0.2, 0.15],
    scale: [0.4, 0.4, 0.4],
    rotation: [Math.PI * 0.15, 0, Math.PI * 0.5],
  },
};
const AristotlesAnswer = {
  format: 'portrait',
  groupProps: {
    position: [0.199, 0.2, 0.15],
    scale: [0.4, 0.4, 0.4],
    rotation: [Math.PI * 0.15, 0, Math.PI * 0.5],
  },
};
const PlatoAnswerText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForAristotlesAnswerText',
    position: [-0.199, 0.2, 0.15],
    rotation: [Math.PI * 0.15, 0, 0],
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
const AristotlesAnswerText = {
  /*
  configuration for <TextSlide>
  */
  groupProps: {
    name: 'groupForAristotlesAnswerText',
    position: [0.199, 0.2, 0.15],
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

export {
  raphaelSectionSpringConfig,
  raphaelSectionGesturesConfig,
  raphaelPaintingData,
  raphaelPaintingGesture,
  raphaelPaintingLeftText,
  philosophersAnswers,
  philosophersAnswersGesture,
  PlatoAnswer,
  PlatoAnswerText,
  AristotlesAnswer,
  AristotlesAnswerText,
};
