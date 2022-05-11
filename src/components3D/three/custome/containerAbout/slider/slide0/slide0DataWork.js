/*
assets for "Client Section"
*/
import manOnTheMoon from '../../../../../../assets/textures/containerAbout_Slide0_moon_5_445_800.webp';
import tech from '../../../../../../assets/textures/containerAbout_Slide0_tech_3_445_800.webp';
import music from '../../../../../../assets/textures/containerAbout_Slide0_music_4_445_800.webp';
import medicine from '../../../../../../assets/textures/containerAbout_Slide0_medicine_2_445_800.webp';
/*
assets for "77digits Section"
*/
import family from '../../../../../../assets/textures/containerAbout_Slide1_family_3.webp';
import blank from '../../../../../../assets/textures/containerAbout_Slide1_blank_verticalFormat_445_800..webp';
/*
Basic Imported Data
*/
import { springConfigs } from '../../../../../../data/reactSpring';
/*
Basic Local Data - fonts sizes, minForTablet
*/
const minForTablet = 850;

/*-------------------------------------------------------------------------*/
/*
Settings used by <Slide0> & <Slide1> as data for "slider engine"; specifies position "in center" or "at top" depending on slide index
*/
const sliderEngineSpring = {
  centralPosition: 0,
  topPosition: 1,
  bottomPosition: -1,
  config: springConfigs.configBasic,
  configDown: springConfigs.molasses,
};
/*
props for <SpinningBoxIndicator>'s <CustomMeshWithMatcap> & <TextGeometryFromFont>; i.e. for "extruded numbers"
*/
const indicatorExtrudeSettings = {
  size: 0.7,
  height: 0.03,
  bevelEnabled: true,
  curveSegments: 2,
  bevelThickness: 0.01,
  bevelSize: 0.005,
};
const glyphsGapFactorX = 1.4;

const indicatorCongif = {
  /*
  container for all numbers
  */
  mainGroupProps: { position: [-0.066, -0.31, 0], scale: [0.02, 0.02, 0.02] },
  /*
  array of "configObj items"; prepered for .map();
  */
  glyphs: [
    {
      glyphGroupProps: { position: [0, 0, 0], scale: [1, 1, 1] },
      fontExtrudeSettings: { ...indicatorExtrudeSettings },
      text: '1',
    },
    {
      glyphGroupProps: {
        position: [1 * glyphsGapFactorX, 0, 0],
        scale: [1, 1, 1],
      },
      fontExtrudeSettings: { ...indicatorExtrudeSettings },
      text: '2',
    },
    {
      glyphGroupProps: {
        position: [2 * glyphsGapFactorX, 0, 0],
        scale: [1, 1, 1],
      },
      fontExtrudeSettings: { ...indicatorExtrudeSettings },
      text: '3',
    },
    {
      glyphGroupProps: {
        position: [3 * glyphsGapFactorX, 0, 0],
        scale: [1, 1, 1],
      },
      fontExtrudeSettings: { ...indicatorExtrudeSettings },
      text: '4',
    },
    {
      glyphGroupProps: {
        position: [4 * glyphsGapFactorX, 0, 0],
        scale: [1, 1, 1],
      },
      fontExtrudeSettings: { ...indicatorExtrudeSettings },
      text: '77',
    },
  ],
};

/*
<Slide0> Layout
it actually define <SpinningBox>'s scale & position depending on device size; i.e where it stand on "screen";
*/

const spinningBoxLayout = {
  mobile: { scale: [0.32, 0.32, 0.32] },
  desktop: { scale: [0.33, 0.33, 0.33] },
};

/*
Set of props for <SpinningBoxSide>s and their childComponents: <UniversaleFrame> and two <SideLabel>s
*/
const frameConfig = {
  format: 'verticalFormat',
  cylinderFi: 0.015,
  sphereRadious: 0.03,
};
/*
Some Basic Data
*/
const mF = 0.25;
const sF = 0.6;
const xlFontHeader = [0.16, 0.18, 0.19];
const mFontHeader = [0.16 * sF, 0.18 * sF, 0.19 * sF];
const mFontParagraph = [0.16 * mF, 0.18 * mF, 0.19 * mF];

const xlHeaderConfig = {
  font: 'garamont',
  fontSize: xlFontHeader,
  letterSpacing: 0.1,
  maxWidthValue: 0.5,
  lineHeight: 1.2,
};

const mHeaderConfig = {
  textProps: { position: [0, 0.4, 0.01] },
  font: 'garamont',
  fontSize: mFontHeader,
  letterSpacing: 0.1,
  maxWidthValue: 0.7,
  lineHeight: 1.2,
};
const mParagraphConfig = {
  font: 'jost',
  fontSize: mFontParagraph,
  letterSpacing: 0.14,
  maxWidthValue: 0.6,
  lineHeight: 1.3,
  strokeWidth: 0.00001,
};
/*
Main Staff
*/
const spinningBoxConfig = [
  /* -----Panel Front ---------------------------------------------*/
  {
    /*
    for <SpinningBoxSide>'s general layout
    */
    sideProps: { position: [0, 0, 0.455], rotation: [0, 0, 0] },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      ...frameConfig,
    },
    /*
    for <SpinningBoxSide>'s <SideLabel>
    */
    labelProps: {
      /*
      for label's <UniversalFrame> or <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: manOnTheMoon,
      },
      /*
      in case we want some <UniqueObject> component
      */
      uniqueObjectName: 'frontUO',
      /*
      for  <DreiText>s
      */
      textConfigHeader: {
        textProps: [
          // PL: mobile / no-mobile
          [{ position: [0, 0.25, 0.01] }, { position: [0, 0.34, 0.01] }],
          // EN: mobile / no-mobile
          [{ position: [0, 0.2, 0.01] }, { position: [0, 0.34, 0.01] }],
        ],
        text: ["Here you're", 'Jesteś Ty...'],
        ...xlHeaderConfig,
      },
    },

    labelPropsReverse: {
      canvasProps: {
        format: 'verticalFormat',
        image: family,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      textConfigHeader: {
        textProps: [
          // PL: mobile / no-mobile
          [
            { position: [0, 0.34, -0.01], rotation: [0, Math.PI, 0] },
            { position: [0, 0.34, -0.01], rotation: [0, Math.PI, 0] },
          ],
          // EN: mobile / no-mobile
          [
            { position: [0, 0.2, -0.01], rotation: [0, Math.PI, 0] },
            { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
          ],
        ],
        font: 'garamont',
        text: ["Here I'am", 'Jestem Ja'],
        ...xlHeaderConfig,
        lineHeight: 1,
      },
    },
  },

  /* -----Panel Left / TECH & myINTRO ------------------------------  */
  {
    /*
    for <SpinningBoxSide>'s general layout
    */
    sideProps: { position: [-0.455, 0, -0], rotation: [0, -0.5 * Math.PI, 0] },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      ...frameConfig,
    },
    /*
    for "Client Side"
    */
    labelProps: {
      /*
      for label's <UniversalFrame>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: tech,
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
      /*
      for <DreiText>
      */
      textConfigHeader: {
        text: ["Imagine you're", 'Może jesteś'],
        ...mHeaderConfig,
      },
      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
              // EN: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
            ],
            text: [
              'producer of unique and advanced technical solution...',
              'producentem/ producentką unikalnych rozwiązań technicznych...',
            ],
            ...mParagraphConfig,
          },
        },
      ],
    },
    /*
    for "77digits Side"
    */
    labelPropsReverse: {
      textConfigHeader: {
        ...mHeaderConfig,
        textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        text: ['I hunt for', 'Poszukuję'],
      },
      canvasProps: {
        format: 'verticalFormat',
        image: blank,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
    },
  },
  /* -----Panel Back / MUSIC & ---------------------------------------  */
  {
    sideProps: { position: [0, 0, -0.455], rotation: [0, Math.PI, 0] },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      ...frameConfig,
    },
    /*
    for <SpinningBoxSide>'s <SideLabel>
    */
    labelProps: {
      /*
      for label's <UniversalFrame>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: music,
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
      /*
      for <DreiText>
      */
      textConfigHeader: {
        text: ["Imagine you're", 'Może jesteś'],
        ...mHeaderConfig,
      },
      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
              // EN: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
            ],
            text: [
              'an author of outstanding pieces of music...',
              'twórczynią/ twórcą wybitnych dzieł muzycznych...',
            ],
            ...mParagraphConfig,
          },
        },
      ],
    },
    /*
    for "77digits Side"
    */
    labelPropsReverse: {
      textConfigHeader: {
        ...mHeaderConfig,
        textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        text: ['I build', 'Buduję'],
      },
      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
              // EN: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
            ],
            text: [
              'subtle connections between technology and art....  ',
              'subtelne połączenia powiędzy technologią i sztuką...',
            ],
            ...mParagraphConfig,
          },
        },
      ],
      canvasProps: {
        format: 'verticalFormat',
        image: blank,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
    },
  },

  /* -----Panel Right / MEDICINE & ---------------------------------------  */
  {
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * 0.5, 0] },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      ...frameConfig,
    },
    /*
    for <SpinningBoxSide>'s <SideLabel>
    */
    labelProps: {
      /*
      for label's <UniversalFrame>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: medicine,
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
      /*
      for <DreiText>
      */
      textConfigHeader: {
        text: ["Imagine you're", 'Może jesteś'],
        ...mHeaderConfig,
      },
      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
              // EN: mobile / no-mobile
              [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
            ],
            text: [
              'an great hope of medicin....  ',
              'długo oczekiwaną nadzieją branży medycznej...',
            ],
            ...mParagraphConfig,
          },
        },
      ],
    },
    /*
    for "77digits Side"
    */
    labelPropsReverse: {
      textConfigHeader: {
        ...mHeaderConfig,
        textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        text: ['I create', 'Tworzę'],
      },

      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
              // EN: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
            ],
            text: [
              'web applications only for demanding clients....  ',
              'aplikacje internetowe wyłacznie dla odważnych Klientów...',
            ],
            ...mParagraphConfig,
          },
        },
      ],

      canvasProps: {
        format: 'verticalFormat',
        image: blank,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
    },
  },
];

export {
  minForTablet,
  sliderEngineSpring,
  spinningBoxLayout,
  spinningBoxConfig,
  indicatorCongif,
};
