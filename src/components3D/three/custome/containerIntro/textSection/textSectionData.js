const fontStandard = [0.05, 0.09, 0.15];
const letterSpacing = 0.1;

/*
All configuration for <TextSlideFromArray>
*/
const slides = [
  {
    id: 1,
    groupProps: {
      position: [0, 0, -2.5],
      rotation: [0.05 * Math.PI, 0, 0],
      name: 'TextVersedGroup_1',
    },
    words: [
      {
        textProps: { position: [0, 0.2, 0] },
        font: 'garamont',
        text: ['Thanks', 'Dziękuję,'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 0.1,
      },
      {
        textProps: { position: [0.0, 0.0, -0.45] },
        font: 'garamont',
        text: ['for your', 'że mnie'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 0.9,
      },
      {
        // textProps: { position: [0.02, -0.22, -0.75] },
        textProps: [
          { position: [0.02, -0.32, -0.75], rotation: [0, 0, Math.PI * 0.2] },
          { position: [0.02, -0.22, -0.75] },
        ],
        font: 'garamont',
        text: ['visiting!', 'odwiedzasz!'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 0.1,
      },
    ],
    /*
    PL
    */
    textLinesPl: ['Dziękuję,', 'że mnie', 'odwiedzasz!'],
    // textPropsPl: [
    //   { position: [0, 0.34, 0] },
    //   { position: [0, -0.02, -0.4] },
    //   { position: [0, -0.38, -0.8] },
    // ],
    mobilePositionPl: [
      { position: [0, 0.4, 0] },
      { position: [0.0, 0.1, -0.45] },
      { position: [0.02, -0.22, -0.75] },

      // { position: [0.03, 0.39, -0.4], rotation: [0, -0.49 * Math.PI, 0] },
      // { position: [0.32, 0.17, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
    ],
    desktopPositionPl: [
      { position: [0, 0.34, -0.1] },
      { position: [0.02, -0.02, -0.38] },
      { position: [0.02, -0.39, -0.75] },
      // { position: [0.1, 0.16, -0.2], rotation: [0, 0.22 * Math.PI, 0] },
      // { position: [0.6, -0.25, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
    ],

    fontPl: ['garamont', 'garamont', 'garamont'],
    fontSizePl: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    ],
    whiteSpacePl: ['normal', 'nowrap', 'normal'],
    /*
    EN
    */
    textLinesEn: ['Thank', 'you', 'for visiting!'],
    textPropsEn: [
      { position: [0, 0.34, 0] },
      { position: [0, -0.02, -0.4] },
      { position: [0, -0.38, -0.8] },
    ],
    fontEn: ['garamont', 'garamont', 'garamont'],
    fontSizeEn: [
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
      { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
    ],
  },

  // {
  //   id: 1,
  //   groupProps: {
  //     position: [0, -0.11, -2.7],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_1',
  //   },
  //   /*
  //   PL
  //   */
  //   textLinesPl: ['Dziękuję,', 'że mnie', 'odwiedzasz!'],
  //   // textPropsPl: [
  //   //   { position: [0, 0.34, 0] },
  //   //   { position: [0, -0.02, -0.4] },
  //   //   { position: [0, -0.38, -0.8] },
  //   // ],
  //   mobilePositionPl: [
  //     { position: [0, 0.4, 0] },
  //     { position: [0.0, 0.1, -0.45] },
  //     { position: [0.02, -0.22, -0.75] },

  //     // { position: [0.03, 0.39, -0.4], rotation: [0, -0.49 * Math.PI, 0] },
  //     // { position: [0.32, 0.17, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],
  //   desktopPositionPl: [
  //     { position: [0, 0.34, -0.1] },
  //     { position: [0.02, -0.02, -0.38] },
  //     { position: [0.02, -0.39, -0.75] },
  //     // { position: [0.1, 0.16, -0.2], rotation: [0, 0.22 * Math.PI, 0] },
  //     // { position: [0.6, -0.25, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],

  //   fontPl: ['garamont', 'garamont', 'garamont'],
  //   fontSizePl: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  //   whiteSpacePl: ['normal', 'nowrap', 'normal'],
  //   /*
  //   EN
  //   */
  //   textLinesEn: ['Thank', 'you', 'for visiting!'],
  //   textPropsEn: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [0, -0.38, -0.8] },
  //   ],
  //   fontEn: ['garamont', 'garamont', 'garamont'],
  //   fontSizeEn: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  // },
  // {
  //   id: 2,
  //   groupProps: {
  //     position: [0, 0, -6.05],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_2',
  //   },
  //   /*
  //   PL
  //   */
  //   textLinesPl: ['Jestem', 'programistą', 'web  ', 'developerem'],
  //   mobilePositionPl: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [-0.25, -0.2, -0.15], rotation: [0, 0, -0.5 * Math.PI] },
  //     { position: [0.03, -0.64, -0.65] },
  //   ],
  //   desktopPositionPl: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [-0.45, -0.22, 0], rotation: [0, 0, -0.5 * Math.PI] },
  //     { position: [0.1, -0.64, -0.65] },
  //   ],
  //   fontPl: ['garamont', 'garamont', 'jost', 'jost'],
  //   fontSizePl: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.07, fontMiddle: 0.11, fontLarge: 0.18 },
  //     { fontSmall: 0.07, fontMiddle: 0.1, fontLarge: 0.18 },
  //   ],

  //   /*
  //   EN
  //   */
  //   textLinesEn: ["I'am", 'developer', '', ''],
  //   mobilePositionEn: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [-0.25, -0.2, -0.15], rotation: [0, 0, -0.5 * Math.PI] },
  //     { position: [0.03, -0.64, -0.65] },
  //   ],
  //   desktopPositionEn: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [-0.45, -0.22, 0], rotation: [0, 0, -0.5 * Math.PI] },
  //     { position: [0.1, -0.64, -0.65] },
  //   ],
  //   fontEn: ['garamont', 'garamont', 'jost', 'jost'],
  //   fontSizeEn: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.07, fontMiddle: 0.11, fontLarge: 0.18 },
  //     { fontSmall: 0.07, fontMiddle: 0.1, fontLarge: 0.18 },
  //   ],
  // },
  // {
  //   id: 3,
  //   groupProps: {
  //     position: [0, -0.15, -9.2],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_3',
  //   },
  //   /*
  //   Pl
  //   */
  //   textLinesPl: [
  //     'J e ś l i    c z u j e s z,',
  //     'ż e   m a s z   o c h o t ę',
  //     'n a . . .',
  //     // 'w y r a f i n o',
  //     // ' w a n y',
  //   ],
  //   mobilePositionPl: [
  //     { position: [0, 0.42, 0] },
  //     { position: [0.0, 0.12, -0.45] },
  //     { position: [0.02, -0.12, -0.65] },

  //     // { position: [0.03, 0.39, -0.4], rotation: [0, -0.49 * Math.PI, 0] },
  //     // { position: [0.32, 0.17, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],
  //   desktopPositionPl: [
  //     { position: [0, 0.34, -0.1] },
  //     { position: [0.02, -0.02, -0.4] },
  //     { position: [0.02, -0.35, -0.7] },
  //     // { position: [0.1, 0.16, -0.2], rotation: [0, 0.22 * Math.PI, 0] },
  //     // { position: [0.6, -0.25, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],
  //   fontPl: ['garamont', 'garamont', 'garamont'],
  //   fontSizePl: [
  //     { fontSmall: 0.09, fontMedium: 0.09, fontLarge: 0.17 },
  //     { fontSmall: 0.09, fontMedium: 0.09, fontLarge: 0.17 },
  //     { fontSmall: 0.09, fontMedium: 0.09, fontLarge: 0.17 },
  //     // { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     // { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  //   letterSpacingPl: [-0.02, -0.02, -0.02],
  //   whiteSpacePl: ['nowrap', 'nowrap', 'nowrap'],

  //   /*
  //   En
  //   */
  //   textLinesEn: ['If you are', 'in a mood', 'to profound'],
  //   mobilePositionEn: [
  //     { position: [0, 0.67, 0] },
  //     { position: [0.02, 0.57, 0] },
  //     { position: [0.03, 0.39, -0.4] },
  //     { position: [0.32, 0.17, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],
  //   desktopPositionEn: [
  //     { position: [0, 0.65, 0] },
  //     { position: [0.02, 0.47, 0] },
  //     { position: [0.1, 0.16, -0.4] },
  //     { position: [0.58, -0.2, -0.4], rotation: [0, 0, -0.49 * Math.PI] },
  //   ],
  //   fontEn: ['garamont', 'garamont', 'garamont', 'garamont'],
  //   fontSizeEn: [
  //     { fontSmall: 0.09, fontMiddle: 0.09, fontLarge: 0.17 },
  //     { fontSmall: 0.09, fontMiddle: 0.09, fontLarge: 0.17 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  //   letterSpacingEn: [-0.02, -0.02, -0.01, -0.01],
  // },
  // {
  //   id: 4,
  //   groupProps: {
  //     position: [0, -0.15, -12.8],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_4',
  //   },
  //   /*
  //   Pl
  //   */
  //   textLinesPl: ['cyfrowy', 'O', 'D', 'L', 'O', 'T', 'w internetach'],
  //   fontSizePl: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.03, fontMiddle: 0.04, fontLarge: 0.05 },
  //   ],
  //   fontPl: [
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //   ],
  //   textPropsPl: [
  //     { position: [0, 0.6, -0.4] },
  //     //___odlot
  //     { position: [0, 0.45, 0.3] },
  //     { position: [0, 0.1, -0.1] },
  //     { position: [0, -0.2, -0.3] },
  //     { position: [0, -0.5, -0.5] },
  //     { position: [0, -0.8, -0.7] },
  //     //___
  //     { position: [0, -1, -0.8] },
  //   ],
  //   whiteSpacePl: [
  //     'nowrap',
  //     'nowrap',
  //     'nowrap',
  //     'nowrap',
  //     'nowrap',
  //     'nowrap',
  //     'nowrap',
  //   ],

  //   textLinesEn: ['digital', 'take-off', 'on the internet'],
  //   fontSizeEn: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  //   fontEn: ['garamont', 'garamont', 'garamont'],
  //   textPropsEn: [
  //     { position: [0, 0.68, 0] },
  //     { position: [0, 0.45, 0.3] },
  //     { position: [0, 0.1, -0.1] },
  //   ],
  // },

  // {
  //   id: 5,
  //   groupProps: {
  //     position: [0, -0.15, -15.9],
  //     rotation: [Math.PI * 0.1, 0, 0],
  //     name: 'TextVersedGroup_5',
  //   },
  //   /*
  //   Pl
  //   */
  //   textLinesPl: ['Dzwoń!', 'Pisz!', 'Tańcz!', 'Lajkuj!', 'Tłituj!', 'Kochaj!'],
  //   textPropsPl: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [-0.4, -0.58, -0.9] },
  //     { position: [-0.4, 0.48, -0.9] },
  //     { position: [0.4, -0.68, -0.9] },
  //     { position: [-0.2, -0.38, -0.99] },
  //   ],
  //   fontPl: [
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //     'garamont',
  //   ],
  //   fontSizePl: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.03, fontMiddle: 0.07, fontLarge: 0.1 },
  //     { fontSmall: 0.03, fontMiddle: 0.07, fontLarge: 0.1 },
  //     { fontSmall: 0.03, fontMiddle: 0.07, fontLarge: 0.1 },
  //     { fontSmall: 0.03, fontMiddle: 0.07, fontLarge: 0.1 },
  //   ],

  //   textLinesEn: ['Just', 'let me', 'know!'],
  //   textPropsEn: [
  //     { position: [0, 0.34, 0] },
  //     { position: [0, -0.02, -0.4] },
  //     { position: [0, -0.38, -0.8] },
  //   ],
  //   fontEn: ['garamont', 'garamont', 'garamont'],
  //   fontSizeEn: [
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //     { fontSmall: 0.09, fontMiddle: 0.12, fontLarge: 0.2 },
  //   ],
  // },
];

export default slides;
