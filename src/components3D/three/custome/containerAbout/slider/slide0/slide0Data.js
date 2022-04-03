//
import dama from '../../../../../../assets/textures/containerAbout_Slide0_dama.png';
import david from '../../../../../../assets/textures/containerAbout_Slide0_david.webp';
// import manOnTheMoon from '../../../../../../assets/textures/containerAbout_Slide0_the_dzow_times_445_800.webp';
import manOnTheMoon from '../../../../../../assets/textures/containerAbout_Slide0_moon_4_445_800.webp';
import tech from '../../../../../../assets/textures/containerAbout_Slide0_tech_2_445_800.webp';

import music from '../../../../../../assets/textures/containerAbout_Slide0_music_4_445_800.webp';

//
import { springConfigs } from '../../../../../../data/reactSpring';
/*
BasicData
*/

const fontSizesSmall = { fontSmall: 0.05, fontMedium: 0.06, fontLarge: 0.07 };
// const fontSizesMedium = { fontSmall: 0.06, fontMedium: 0.07, fontLarge: 0.08 };
const fontSizesMedium = {
  fontSmall: 0.085,
  fontMedium: 0.095,
  fontLarge: 0.105,
};

const fontSizesLarge = { fontSmall: 0.07, fontMedium: 0.08, fontLarge: 0.09 };
const fontSizesVeryLarge = {
  fontSmall: 0.16,
  fontMedium: 0.18,
  fontLarge: 0.19,
};

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
        'Jesteś',
        'Ty',
        // 'Laureat prestiżowej nagrody (Nobla?)',
        // 'Twórczyni wybitnych dzieł artystycznych',
      ],
      textPropsPl: [
        { position: [0, 0.4, 0.01] },
        { position: [0, 0.2, 0.01] },
        // { position: [0, 0, 0.01] },
        // { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['garamont', 'garamont'],
      fontSizePl: [
        { ...fontSizesVeryLarge },
        { ...fontSizesVeryLarge },
        // { ...fontSizesSmall },
        // { ...fontSizesSmall },
      ],
      // textAlignPl: ['left', 'left', 'left', 'left'],
      // whiteSpacePl: ['normal', 'normal'],
      // maxWidthFactorPl: [0.01, 0.01, 0.01, 0.01],
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
      format: 'verticalFormat',
      image: manOnTheMoon,
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
    sideProps: { position: [-0.455, 0, -0], rotation: [0, Math.PI * -0.5, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['Może jesteś', 'twórczynią wybitnych dzieł muzycznych'],
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
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesSmall }],
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
      format: 'verticalFormat',
      image: music,
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
      textLinesPl: ['Może jesteś', 'wielką nadzieja branży medycznej'],
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
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesSmall }],
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
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * 0.5, 0] },

    labelProps: {
      textLinesPl: [
        'Może jesteś',
        'producentem unikalnych rozwiązań technicznych',
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
      fontSizePl: [{ ...fontSizesMedium }, { ...fontSizesSmall }],
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
      format: 'verticalFormat',
      image: tech,
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
