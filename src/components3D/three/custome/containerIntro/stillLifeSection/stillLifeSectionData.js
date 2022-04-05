import gramophone from '../../../../../assets/textures/music_gramophone_420_592.webp';

const paintingData = {
  desktopGroupProps: {
    name: 'GroupForGramophoneStillLife',
    position: [0, -0.35, -9.2],
    scale: [1.5, 1.5, 1.5],
    // rotation: [0, 0.2 * Math.PI, 0],
    rotation: [0, 0, 0],
  },
  mobileGroupProps: {
    name: 'GroupForVenusInFrame',
    // position: [-0.05, -0.35, -9.4],
    position: [0, -0.2, -9.4],
    scale: [1.2, 1.2, 1.2],
    // rotation: [0, 0.2 * Math.PI, 0],
    rotation: [0, 0, 0],
  },
  canvasProps: { image: gramophone, format: 'portrait' },
  frameProps: {
    groupProps: { name: 'groupForFrameOfVenusInFrame' },
    format: 'portrait',
    cylinderFi: 0.015,
    sphereRadious: 0.03,
  },
};

const textProps = {
  /*
  Pl
  */
  textLinesPl: ['wyraf', 'ino', ' wany'],
  mobilePositionPl: [
    { position: [-0.025, 0.3, 0.01] },
    { position: [0.19, 0.3, 0.01] },
    { position: [0.32, 0.14, 0.01], rotation: [0, 0, -0.5 * Math.PI] },
  ],
  desktopPositionPl: [
    { position: [-0.0, 0.3, 0.01] },
    { position: [0.18, 0.3, 0.01] },
    { position: [0.29, 0.15, 0.01], rotation: [0, 0, -0.5 * Math.PI] },
  ],
  fontPl: ['garamont', 'garamont', 'garamont'],
  fontSizePl: [
    { fontSmall: 0.06, fontMiddle: 0.07, fontLarge: 0.08 },
    { fontSmall: 0.06, fontMiddle: 0.07, fontLarge: 0.08 },
    { fontSmall: 0.06, fontMiddle: 0.07, fontLarge: 0.08 },
  ],
  letterSpacingPl: [0.1, 0.1, 0.1],
  whiteSpacePl: ['nowrap', 'nowrap'],
  /*
  En
  */
  textLinesEn: ['If you are', 'in a mood', 'to profound'],
  mobilePositionEn: [
    { position: [0, 0.67, 0] },
    { position: [0.02, 0.57, 0] },
    { position: [0.03, 0.39, -0.4] },
    { position: [0.32, 0.17, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  ],
  desktopPositionEn: [
    { position: [0, 0.65, 0] },
    { position: [0.02, 0.47, 0] },
    { position: [0.1, 0.16, -0.4] },
    { position: [0.58, -0.2, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  ],
  fontEn: ['garamont', 'garamont', 'garamont', 'garamont'],
  fontSizeEn: [
    { fontSmall: 0.09, fontMiddle: 0.09, fontLarge: 0.17 },
    { fontSmall: 0.09, fontMiddle: 0.09, fontLarge: 0.17 },
    { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  ],
  letterSpacingEn: [-0.02, -0.02, -0.01, -0.01],
};

export { paintingData, textProps };
