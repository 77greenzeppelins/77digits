//
import dama from '../../../../../../assets/textures/containerAbout_Slide0_box1_image1.png';
import david from '../../../../../../assets/textures/containerAbout_Slide0_box_1_image3.webp';
//
import { springConfigs } from '../../../../../../data/reactSpring';
/*
BasicData
*/
const fontSizes = { fontSmall: 0.06, fontMedium: 0.07, fontLarge: 0.08 };
const fontSizesSmall = { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.07 };
/*
Settings used by <Slide0> & <Slide1>
*/
const slideSpring = {
  visiblePosition: 0,
  hiddenPositionX: -1,
  hiddenPositionY: 1,
  hiddenPositionZ: -2.2,
  // config: springConfigs.configBasic,
  config: springConfigs.molasses,
};

/*
Slide1's Layout
it actually define <SlideBox>'s scale & position depending on device size;
*/
const slide0Box1Layout = {
  mobile: { scale: [0.33, 0.33, 0.33], position: [0, 0.03, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [0, 0.02, 0] },
};

/*
Slide1's springAnimation
how user can drag <SlideBox> & how <SlideBox> reacts on button click
*/
const slide0Box1DataForSpring = {
  /* necessary for <SpinningBox>'s gestures animation */
  axisLimitation: 'x',
  /* necessary for <SpinningBoxside>'s rotation spring animation */
  config: springConfigs.molasses,
  animationDelay: 600,
};

/*
Slide1's children components specification 
*/
const slide0Box1Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.455], rotation: [0, 0, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'Jesteś Ty',
        'być może',
        'Laureat prestiżowej nagrody (Nobla?)',
        'Twórczyni wybitnych dzieł artystycznych',
      ],
      textPropsPl: [
        { position: [0, 0.5, 0.01] },
        { position: [0, 0.3, 0.01] },
        { position: [0, 0, 0.01] },
        { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['garamont', 'garamont', 'jost', 'jost'],
      fontSizePl: [
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
      ],
      // textAlignPl: ['left', 'left', 'left', 'left'],
      whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      MaxWidthFactorPl: [0.01, 0.01, 0.01, 0.01],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      MaxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      format: 'verticalFormat',
    },
    canvasProps: {
      image: dama,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.455, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'przyszłość',
        'branży medycznej',
        'a może',
        'mistrz w naukach ścisłych',
      ],
      textPropsPl: [
        { position: [0, 0.5, 0.01] },
        { position: [0, 0.3, 0.01] },
        { position: [0, 0, 0.01] },
        { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['garamont', 'garamont', 'jost', 'jost'],
      fontSizePl: [
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
      ],
      // textAlignPl: ['left', 'left', 'left', 'left'],
      whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      MaxWidthFactorPl: [0.01, 0.01, 0.01, 0.01],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      MaxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      format: 'verticalFormat',
    },
    canvasProps: {
      image: dama,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.455], rotation: [0, Math.PI, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['...', 'być może', '...', '...'],
      textPropsPl: [
        { position: [0, 0.5, 0.01] },
        { position: [0, 0.3, 0.01] },
        { position: [0, 0, 0.01] },
        { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['garamont', 'garamont', 'jost', 'jost'],
      fontSizePl: [
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
      ],
      // textAlignPl: ['left', 'left', 'left', 'left'],
      whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      MaxWidthFactorPl: [0.01, 0.01, 0.01, 0.01],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      MaxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      format: 'verticalFormat',
    },
    canvasProps: {
      image: david,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * -0.5, 0] },

    text: 'Producent unikalnych rozwiązań technicznych',

    labelProps: {
      textLinesPl: [
        'Producent',
        'unikalnych',
        'rozwiązań technicznych',
        'albo',
      ],
      textPropsPl: [
        { position: [0, 0.5, 0.01] },
        { position: [0, 0.3, 0.01] },
        { position: [0, 0, 0.01] },
        { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['garamont', 'garamont', 'jost', 'jost'],
      fontSizePl: [
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
        { ...fontSizesSmall },
      ],
      // textAlignPl: ['left', 'left', 'left', 'left'],
      whiteSpacePl: ['normal', 'normal', 'normal', 'normal', 'normal'],
      MaxWidthFactorPl: [0.01, 0.01, 0.01, 0.01],
      /*
      En for <TextSlideFromArray>
      */
      textLinesEn: ['I create web page for demanding Clients'],
      textPropsEn: [{ position: [0, 0, 0.01] }],
      fontEn: ['jost'],
      fontSizeEn: [{ ...fontSizesSmall }],
      textAlignEn: ['left'],
      whiteSpaceEn: ['normal'],
      MaxWidthFactorEn: [0.01],
      /*
      for <UniversalFrameWithoutMap>
      */
      format: 'verticalFormat',
    },

    canvasProps: {
      image: david,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },
];

export {
  slideSpring,
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box1DataForSpring,
};
