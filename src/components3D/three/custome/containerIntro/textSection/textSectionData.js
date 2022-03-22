const slides = [
  {
    groupProps: {
      position: [0, -0.15, -2.7],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_1',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['Dziękuję,', 'że mnie', 'odwiedzasz!'],
    textLinesEn: ['Thank', 'you', 'for visiting!'],
  },
  {
    groupProps: {
      position: [0, -0.15, -6.05],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_2',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['Jestem', 'programistą'],
    textLinesEn: ["I'am", 'developer'],
  },
  {
    groupProps: {
      position: [0, -0.15, -9.2],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_3',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['Jeśli masz', 'ochotę na'],
    textLinesEn: ['If you are', 'in a mood', 'to...'],
  },
  {
    groupProps: {
      position: [0, -0.15, -12.4],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_4',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.36, 0],
      [0, 0.03, -0.4],
      [0, -0.38, -0.8],
    ],
    /*
    there is a "bug" and "fi" is merged; that is why I use spaces between letters
    */
    textLinesPl: [
      'w y r a f i n o w a n y,',
      'p r e c y z y j n i e',
      'z a p r o j e k t o w a n y,',
    ],
    textLinesEn: ['', 'designed'],
    thisLetterSpacing: -0.01,
  },
  {
    groupProps: {
      position: [0, -0.15, -15.5],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_5',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      // [0, 0.34, 0],
      [0, 0, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['ODLOT'],
    textLinesEn: ['TAKE-OFF'],
  },
  {
    groupProps: {
      position: [0, -0.15, -18.6],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_6',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['w inter-', 'netach...'],
    textLinesEn: ['on the', 'internet'],
  },
  {
    groupProps: {
      position: [0, -0.15, -21.7],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_7',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['Wystarczy', 'jeden'],
    textLinesEn: ['on the', 'internet'],
  },
  {
    groupProps: {
      position: [0, -0.15, -24.8],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_8',
    },
    fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    linePositions: [
      [0, 0.34, 0],
      [0, -0.02, -0.4],
      [0, -0.38, -0.8],
    ],
    textLinesPl: ['Twój', 'ruch!'],
    textLinesEn: ['on the', 'internet'],
  },
];

export default slides;

// groupProps, textLines, textProps, fonts;
