/*
TextVerse
*/
const TextVerseData = [
  {
    textHeader: 'Janus',
    fontSmall: 0.025,
    fontMiddle: 0.035,
    fontLarge: 0.045,
  },
  {
    textHeader: 'King',
    fontSmall: 0.025,
    fontMiddle: 0.035,
    fontLarge: 0.045,
  },
  {
    textHeader: '.....',
    fontSmall: 0.025,
    fontMiddle: 0.035,
    fontLarge: 0.045,
  },
];
/*
DragRotateStepByStep
*/
const useDragData = {
  rightDragLimitX: -0.25,
  leftDragLimitX: -0.25,
  rightDragLimitY: 1,
  leftDragLimitY: -1,
};

const sidesData = {
  sideFront: { position: [0, 0, 0.365], rotation: [0, 0, 0] },
  sideLeft: { position: [-0.365, 0, -0], rotation: [0, Math.PI * -0.5, 0] },
  sideRight: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
  sideBack: { position: [0, 0, -0.365], rotation: [0, Math.PI, 0] },
};

export { TextVerseData, useDragData, sidesData };
