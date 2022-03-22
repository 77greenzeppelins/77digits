const GestureConfiguration = {
  rightDragLimitX: -0.25,
  leftDragLimitX: -0.25,

  rightDragLimitY: 1,
  leftDragLimitY: -1,
};
/*
"maxWidth" depends on width and height of the screen; it's hard to find "safe settings" 
*/
const mainTextConfiguration = {
  /*
  for both language versions
  */
  fontSize: { fontSmall: 0.05, fontMiddle: 0.06, fontLarge: 0.065 },
  linePosition: { topPositionY: 0.06, reducePositionY: -0.1 },
  /*
  only for PL language versions
  */
  plMainText: ['przesuń lub skroluj', 'góra / dół'],
  /*
  only for EN language versions
  */
  enMainText: ['scroll or drag', 'to explore'],
  enMaxWidth: 20,
};

const leftTextConfiguration = {
  /*
  for both language versions
  */
  groupProps: {
    position: [-0.5, 0, -0.21],
    rotation: [-Math.PI * 0.5, -Math.PI * 0.5, -Math.PI * 0.5],
  },
  fontSize: { fontSmall: 0.05, fontMiddle: 0.06, fontLarge: 0.065 },
  /*
  only for PL language versions
  */
  plLeftText: 'przesuwaj na telefonie, tablecie',
  plMaxWidth: 30,
  /*
  only for PL language versions
  */
  enLeftText: 'drag on touch devices',
  enMaxWidth: 30,
};

const rightTextConfiguration = {
  /*
  for both language versions
  */
  groupProps: {
    position: [0.5, 0, -0.25],
    rotation: [0, Math.PI * 0.5, 0],
  },
  fontSize: { fontSmall: 0.05, fontMiddle: 0.06, fontLarge: 0.065 },
  /*
  only for PL language versions
  */
  plRightText: 'skroluj myszką',
  plMaxWidth: 30,
  /*
  only for PL language versions
  */
  enRightText: 'scroll on desktop',
  enMaxWidth: 30,
};
export {
  GestureConfiguration,
  mainTextConfiguration,
  leftTextConfiguration,
  rightTextConfiguration,
};
