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
/*
Basic Imported Data
*/
import { springConfigs } from '../../../../../../data/reactSpring';
/*
Basic Local Data - fonts sizes, minForTablet
*/
// const fontSizesLarge = { fontSmall: 0.07, fontMedium: 0.08, fontLarge: 0.09 };
const fontSizesVeryLarge = {
  fontSmall: 0.16,
  fontMedium: 0.18,
  fontLarge: 0.19,
};
const fontSizesMedium = {
  fontSmall: 0.085,
  fontMedium: 0.095,
  fontLarge: 0.105,
};
const fontSizesSmall = { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.07 };
const fontSizesVerySmall = {
  fontSmall: 0.04,
  fontMedium: 0.05,
  fontLarge: 0.06,
};

const minForTablet = 850;
/*
Basic Local Data - extrude configObj for <SpinningBoxIndicator>'s numbers
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
<Slide0> Layout
it actually define <SpinningBox>'s scale & position depending on device size; i.e where it stand on "screen";
*/
const slide0Box1Layout = {
  mobile: { scale: [0.32, 0.32, 0.32], position: [0, 0.0, 0] },
  desktop: { scale: [0.33, 0.33, 0.33], position: [0, 0.0, 0] },
  //____before 01.05
  // mobile: { scale: [0.32, 0.32, 0.32], position: [0, 0.03, 0] },
  // desktop: { scale: [0.35, 0.35, 0.35], position: [0, 0.02, 0] },
};
/*
props for <SpinningBoxIndicator>'s <CustomMeshWithMatcap> & <TextGeometryFromFont>; i.e. for "extruded numbers"
*/
const indicatorData = {
  /*
  container for all numbers
  */
  // mainGroupProps: { position: [-0.14, 0.29, 0], scale: [0.02, 0.02, 0.02] },
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
Set of props for <SpinningBoxSide>s and their childComponents: <UniversaleFrame> and two <SideLabel>s
*/
const slide0Box1Data = [
  /* -----Panel Front ---------------------------------------------*/
  {
    sideProps: { position: [0, 0, 0.455], rotation: [0, 0, 0] },

    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Jesteś', 'Ty'],
      textPropsPl: [
        { position: [0, 0.4, 0.01] },
        { position: [0.15, 0.2, 0.01] },
      ],
      fontPl: ['garamont', 'garamont'],
      fontSizePl: [{ ...fontSizesVeryLarge }, { ...fontSizesVeryLarge }],
      textAlignPl: ['left', 'left'],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['garamont'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
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
      // uniqueObjectName: 'unique3DText',
    },

    labelPropsReverse: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Jestem', 'Ja'],
      textPropsPl: [
        { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        { position: [0.15, 0.2, -0.01], rotation: [0, Math.PI, 0] },
      ],
      fontPl: ['garamont', 'garamont'],
      fontSizePl: [{ ...fontSizesVeryLarge }, { ...fontSizesVeryLarge }],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, -0.01], rotation: [0, Math.PI, 0] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      for label's <UniversalFrame>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: family,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
    },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* -----Panel Left------------------------------------------------  */
  {
    sideProps: { position: [-0.455, 0, -0], rotation: [0, -0.5 * Math.PI, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Może jesteś', 'wielką nadzieją branży medycznej...'],
      textPropsPl: [
        { position: [0, 0.4, 0.01] },
        { position: [-0.09, 0.1, 0.01] },
      ],

      textAlignPl: ['left', 'left'],
      // whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      maxWidthFactorMobilePl: [0.01, 20],
      maxWidthFactorDesktopPl: [0.01, 40],
      /*
      font-relevant props
      */
      fontPl: ['garamont', 'jost'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      strokeWidthPl: [0, 0.0005],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: medicine,
      },
    },

    labelPropsReverse: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Tworzę', 'strony internetowe dla wspaniałych Klientów'],
      textPropsPl: [
        { position: [0.1, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        { position: [0.08, 0.1, -0.01], rotation: [0, Math.PI, 0] },
      ],

      textAlignPl: ['left', 'left'],
      // whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      maxWidthFactorMobilePl: [0.01, 20],
      maxWidthFactorDesktopPl: [0.01, 40],
      /*
      font-relevant props
      */
      fontPl: ['garamont', 'jost'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      strokeWidthPl: [0, 0.0005],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, -0.01], rotation: [0, Math.PI, 0] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: family,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
    },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* -----Panel Back--------------------------------------------------------- */
  {
    sideProps: { position: [0, 0, -0.455], rotation: [0, Math.PI, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'Może jesteś',
        'twórczynią/ twórcą wybitnych dzieł muzycznych...',
      ],
      textPropsPl: [
        { position: [0, 0.4, 0.01] },
        { position: [-0.05, 0.1, 0.01] },
      ],

      textAlignPl: ['left', 'left'],
      // whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      maxWidthFactorMobilePl: [0.01, 20],
      maxWidthFactorDesktopPl: [0.01, 40],
      /*
      font-relevant props
      */
      fontPl: ['garamont', 'jost'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      strokeWidthPl: [0, 0.0005],

      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      // maxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: music,
      },
      /*
      in case of <UniqueObject>
      */
      // uniqueObjectName: 'musicNote',
    },

    labelPropsReverse: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Poszukuję', 'idealnego UI '],
      textPropsPl: [
        { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        { position: [0.15, 0.2, -0.01], rotation: [0, Math.PI, 0] },
      ],
      fontPl: ['garamont', 'garamont'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, -0.01], rotation: [0, Math.PI, 0] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      for label's <UniversalFrame> or <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: family,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* ------- Panel Right--------------------------------- */
  {
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * 0.5, 0] },

    labelProps: {
      textLinesPl: [
        'Może jesteś',
        'producentem/ producentką unikalnych rozwiązań technicznych...',
        // 'albo',
        // 'twórczynią wybitnych dzieł muzycznych',
      ],
      textPropsPl: [
        { position: [0, 0.4, 0.01] },
        { position: [-0.05, 0.1, 0.01] },
      ],

      textAlignPl: ['left', 'left'],
      // whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      maxWidthFactorMobilePl: [0.01, 20],
      maxWidthFactorDesktopPl: [0.01, 40],
      /*
      font-relevant props
      */
      fontPl: ['garamont', 'jost'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      strokeWidthPl: [0, 0.0005],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      font-relevant props
      */
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      strokeWidthEn: [0, 0.0005],
      /*
      for <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: tech,
      },
    },

    labelPropsReverse: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'Projektuję',
        'połączenia pomiędzy domeną technologii i estetyki',
      ],
      textPropsPl: [
        { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        { position: [0.15, 0.1, -0.01], rotation: [0, Math.PI, 0] },
      ],
      fontPl: ['garamont', 'garamont'],
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesVerySmall }],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, -0.01], rotation: [0, Math.PI, 0] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      maxWidthFactorEn: [0.01],
      /*
      for label's <UniversalFrame> or <UniversalFrameWithoutMap>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: family,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      /*
      in case we want some <UniqueObject> component
      */
      // uniqueObjectName: 'unique3DText',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },
];

/*
data for <GesturePrompt>
*/

export {
  minForTablet,
  sliderEngineSpring,
  slide0Box1Layout,
  slide0Box1Data,
  indicatorData,
};
