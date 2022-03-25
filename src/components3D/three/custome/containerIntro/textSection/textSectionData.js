/*
All configuration for <TextSlideFromArray>
*/
const slides = [
  {
    id: 1,
    groupProps: {
      position: [0, -0.15, -2.7],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_1',
    },
    textProps: [
      { position: [0, 0.34, 0] },
      { position: [0, -0.02, -0.4] },
      { position: [0, -0.38, -0.8] },
    ],
    font: ['garamont', 'garamont', 'garamont'],
    fontSize: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    ],

    textLinesPl: ['Dziękuję,', 'że mnie', 'odwiedzasz!'],
    textLinesEn: ['Thank', 'you', 'for visiting!'],
  },
  {
    id: 2,
    groupProps: {
      position: [0, -0.15, -6.05],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_2',
    },
    textProps: [
      { position: [0, 0.34, 0] },
      { position: [0, -0.02, -0.4] },
      { position: [-0.45, -0.2, 0], rotation: [0, 0, -0.5 * Math.PI] },
      { position: [0.15, -0.6, -0.75] },
    ],
    font: ['garamont', 'garamont', 'jost', 'jost'],
    fontSize: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.07, fontMiddle: 0.11, fontLarge: 0.18 },
      { fontSmall: 0.07, fontMiddle: 0.1, fontLarge: 0.18 },
    ],
    textLinesPl: ['Jestem', 'programistą', 'web  ', 'developerem'],
    textLinesEn: ["I'am", 'developer', '', ''],
    mobileVersion: {
      webPosition: [-0.25, -0.2, -0.15],
      developerPosition: [0.03, -0.64, -0.65],
    },
  },
  {
    id: 3,
    groupProps: {
      position: [0, -0.15, -9.2],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_3',
    },
    textProps: [
      { position: [0, 0.34, 0] },
      { position: [0, -0.02, -0.4] },
      { position: [0, -0.38, -0.8] },
    ],
    font: ['garamont', 'garamont', 'garamont'],
    fontSize: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    ],

    textLinesPl: ['Jeśli masz', 'ochotę na', 'dogłębny,'],
    textLinesEn: ['If you are', 'in a mood', 'to profound'],
  },
  //-------------------------------------
  // {
  //   groupProps: {
  //     position: [0, -0.15, -12.4],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_4',
  //   },
  //   fontSize: { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   linePositions: [
  //     [0, 0.36, 0],
  //     [0, 0.03, -0.4],
  //     [0, -0.38, -0.8],
  //   ],
  //   /*
  //   there is a "bug" and "fi" is merged; that is why I use spaces between letters
  //   */
  //   textLinesPl: [
  //     'w y r a f i n o w a n y,',
  //     'p r e c y z y j n i e',
  //     'z a p r o j e k t o w a n y,',
  //   ],
  //   textLinesEn: ['', 'designed'],
  //   thisLetterSpacing: -0.01,
  // },
  //-----------------------
  {
    id: 4,
    groupProps: {
      position: [0, -0.15, -12.4],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_4',
    },
    fontSize: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      // { fontSmall: 0.05, fontMiddle: 0.06, fontLarge: 0.1 },
      { fontSmall: 0.03, fontMiddle: 0.04, fontLarge: 0.05 },
    ],
    font: [
      'garamont',
      'garamont',
      'garamont',
      'garamont',
      'garamont',
      'garamont',
      'garamont',
    ],
    textProps: [
      { position: [0, 0.68, 0] },
      /*
      odlot start
      */
      { position: [0, 0.45, 0.3] },

      { position: [0, 0.1, -0.1] },
      { position: [0, -0.2, -0.3] },
      { position: [0, -0.5, -0.5] },
      { position: [0, -0.8, -0.7] },
      /*
      odlot end
      */
      { position: [0, -1, -0.8] },
    ],
    textLinesPl: ['cyfrowy', 'O', 'D', 'L', 'O', 'T', 'w internetach'],
    textLinesEn: ['digital', 'take-off', 'on the internet'],
  },

  {
    id: 5,
    groupProps: {
      position: [0, -0.15, -15.5],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_5',
    },
    textProps: [
      { position: [0, 0.34, 0] },
      { position: [0, -0.02, -0.4] },
      { position: [0, -0.38, -0.8] },
    ],
    font: ['garamont', 'garamont', 'garamont'],
    fontSize: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    ],
    textLinesPl: ['Zadzwoń', 'lub', 'napisz!'],
    textLinesEn: ['Just', 'let me', 'know!'],
  },
];

export default slides;
