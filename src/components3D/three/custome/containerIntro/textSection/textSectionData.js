const letterSpacing = 0.1;
const eF = 1.4;
const dF = 0.6;
const fontStandard = [0.05, 0.09, 0.15];
const fontEnlarged = [0.05 * eF, 0.09 * eF, 0.15 * eF];
const fontDowngraded = [0.05 * dF, 0.09 * dF, 0.15 * dF];

/*
All configuration for <TextSlideFromArray>
*/
const slides = [
  //_____text tablo 1_________________________________________________
  {
    id: 1,
    groupProps: {
      position: [0, 0, -2.5],
      rotation: [0.05 * Math.PI, 0, 0],
      name: 'TextVersedGroup_1',
    },
    words: [
      {
        textProps: [{ position: [0, 0.2, 0.1] }, { position: [0, 0.3, 0.1] }],
        font: 'garamont',
        text: ['Thanks', 'Dziękuję,'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: { position: [0.0, 0.0, -0.45] },
        font: 'garamont',
        text: ['for your', 'że mnie'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            { position: [0.02, -0.22, -0.75] },
            { position: [0.02, -0.42, -0.75] },
          ],
          [
            { position: [0.02, -0.22, -0.75] },
            { position: [0.02, -0.4, -0.75] },
          ],
        ],
        font: 'garamont',
        text: ['visiting!', 'odwiedzasz!'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
    ],
  },

  //_____text tablo 2_________________________________________________
  {
    id: 2,
    groupProps: {
      position: [0, 0, -6.05],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_2',
    },
    words: [
      {
        textProps: [
          [{ position: [0, 0.25, 0] }, { position: [0, 0.34, 0] }],
          [{ position: [0, 0.2, 0] }, { position: [0, 0.1, -0.3] }],
        ],
        font: 'garamont',
        text: ["I'am", 'Jestem'],
        fontSize: fontEnlarged,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [{ position: [0, -0.02, -0.4] }, { position: [0, -0.02, -0.4] }],
          [{ position: [0, -0.02, -0.4] }, { position: [0, -0.02, -0.4] }],
        ],
        font: 'garamont',
        text: ['', 'programistą'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [-0.25, -0.2, -0.15],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.45, -0.22, 0], rotation: [0, 0, -0.5 * Math.PI] },
          ],
          [
            {
              position: [-0.25, -0.1, -0.15],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.3, 0, 0.2], rotation: [0, 0, -0.5 * Math.PI] },
          ],
        ],
        font: 'jost',
        text: ['web', 'web'],
        fontSize: fontEnlarged,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0.03, -0.64, -0.65],
            },
            { position: [0.03, -0.64, -0.65] },
          ],
          [
            {
              position: [0.03, -0.64, -0.65],
            },
            { position: [0.03, -0.64, -0.65] },
          ],
        ],
        font: 'garamont',
        text: ['developer', 'developerem'],
        fontSize: fontEnlarged,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
    ],
  },

  //_____text tablo 3_________________________________________________
  {
    id: 3,
    groupProps: {
      position: [0, -0.15, -9.2],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_3',
    },
    words: [
      {
        textProps: [
          [
            {
              position: [0, 0.42, 0],
            },
            { position: [0, 0.34, -0.1] },
          ],
          [
            {
              position: [0, 0.42, 0],
            },
            { position: [0, 0.34, -0.1] },
          ],
        ],
        font: 'garamont',
        text: ["If  you're", 'Jeśli czujesz,'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0.0, 0.12, -0.45],
            },
            { position: [0.02, -0.02, -0.4] },
          ],
          [
            {
              position: [0.0, 0.12, -0.45],
            },
            { position: [0.02, -0.02, -0.4] },
          ],
        ],
        font: 'garamont',
        text: ['in a mood', 'że masz ochotę'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1.1,
      },
      {
        textProps: [
          [
            {
              position: [0.02, -0.12, -0.65],
            },
            { position: [0.02, -0.35, -0.7] },
          ],
          [
            {
              position: [0.02, -0.12, -0.65],
            },
            { position: [0.02, -0.45, -0.7] },
          ],
        ],
        font: 'garamont',
        text: ['for...', 'na...'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1.1,
      },
    ],
  },

  //_____text tablo 4_________________________________________________

  {
    id: 4,
    groupProps: {
      position: [0, -0.15, -12.8],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_4',
    },
    words: [
      {
        textProps: [
          [
            {
              position: [0, 0.55, -0.4],
            },
            { position: [0, 0.6, -0.4] },
          ],
          [
            {
              position: [0, 0.55, -0.4],
            },
            { position: [0, 0.6, -0.4] },
          ],
        ],
        font: 'garamont',
        text: ['digital', 'cyfrowy'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, 0.45, 0.3],
            },
            { position: [0, 0.45, 0.3] },
          ],
          [
            {
              position: [0, 0.45, 0.3],
            },
            { position: [0, 0.45, 0.3] },
          ],
        ],
        font: 'garamont',
        text: ['T', 'O'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, 0.2, -0.1],
            },
            { position: [0, 0.1, -0.1] },
          ],
          [
            {
              position: [0, 0.2, -0.1],
            },
            { position: [0, 0.16, -0.1] },
          ],
        ],
        font: 'garamont',
        text: ['A', 'D'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, -0.02, -0.3],
            },
            { position: [0, -0.2, -0.3] },
          ],
          [
            {
              position: [0, -0.02, -0.3],
            },
            { position: [0, -0.13, -0.3] },
          ],
        ],
        font: 'garamont',
        text: ['K', 'L'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, -0.27, -0.5],
            },
            { position: [0, -0.5, -0.5] },
          ],
          [
            {
              position: [0, -0.27, -0.5],
            },
            { position: [0, -0.45, -0.5] },
          ],
        ],
        font: 'garamont',
        text: ['E', 'O'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, -0.52, -0.7],
            },
            { position: [0, -0.8, -0.7] },
          ],
          [
            {
              position: [0, -0.52, -0.7],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [0.07, -0.73, -0.7], rotation: [0, 0, -0.5 * Math.PI] },
          ],
        ],
        font: 'garamont',
        text: ['_', 'T'],
        fontSize: fontStandard,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, -0.7, -0.8],
            },
            { position: [0, -1, -0.8] },
          ],
          [
            {
              position: [0, -0.8, -0.8],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [0, -0.95, -0.8], rotation: [0, 0, -0.5 * Math.PI] },
          ],
        ],
        font: 'garamont',
        text: ['OFF', 'w internetach'],
        fontSize: fontDowngraded,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
    ],
  },

  //_____text tablo 4_________________________________________________
  {
    id: 5,
    groupProps: {
      position: [0, -0.15, -15.9],
      rotation: [Math.PI * 0.1, 0, 0],
      name: 'TextVersedGroup_5',
    },
    words: [
      {
        textProps: [
          [
            {
              position: [0, 0.34, 0],
            },
            { position: [0, 0.34, 0] },
          ],
          [
            {
              position: [0, 0, 0.34, 0],
            },
            { position: [0, 0.34, 0] },
          ],
        ],
        font: 'garamont',
        text: ['Write!', 'Pisz!'],
        fontSize: fontDowngraded,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0, -0.02, -0.4],
            },
            { position: [0, -0.02, -0.4] },
          ],
          [
            {
              position: [0, -0.02, -0.4],
            },
            { position: [0, -0.02, -0.4] },
          ],
        ],
        font: 'garamont',
        text: ['Call me!', 'Dzwoń!'],
        fontSize: fontEnlarged,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [-0.3, -0.58, -0.9],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.4, -0.58, -0.9] },
          ],
          [
            {
              position: [-0.3, -0.58, -0.9],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.4, -0.58, -0.9] },
          ],
        ],
        font: 'garamont',
        text: ['Dance!', 'Tańcz!'],
        fontSize: fontDowngraded,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [-0.25, 0.44, -0.9],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.4, 0.48, -0.9] },
          ],
          [
            {
              position: [-0.25, 0.44, -0.9],
              rotation: [0, 0, -0.5 * Math.PI],
            },
            { position: [-0.4, 0.48, -0.9] },
          ],
        ],
        font: 'jost',
        text: ['Like!', 'Lajkuj!'],
        fontSize: fontDowngraded,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
      {
        textProps: [
          [
            {
              position: [0.25, 0.3, -0.99],
              rotation: [0, 0, 0.5 * Math.PI],
            },
            { position: [0.2, 0.3, -0.99] },
          ],
          [
            {
              position: [0.25, 0.3, -0.99],
              rotation: [0, 0, 0.5 * Math.PI],
            },
            { position: [0.2, 0.3, -0.99] },
          ],
        ],
        font: 'jost',
        text: ['Love!', 'Kochaj!'],
        fontSize: fontDowngraded,
        letterSpacing: letterSpacing,
        maxWidthValue: 1,
      },
    ],
  },
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
