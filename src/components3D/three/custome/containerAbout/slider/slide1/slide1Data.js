//
import family from '../../../../../../assets/textures/containerAbout_Slide1_image1.jpg';
//
import { springConfigs } from '../../../../../../data/reactSpring';
/*
Basic Data
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
  //   config: springConfigs.configBasic,
  config: springConfigs.molasses,
};

/*
Slide1's Layout
it actually define <SlideBox>'s scale & position depending on device size;
*/
const slide1Box1Layout = {
  mobile: { scale: [0.33, 0.33, 0.33], position: [0, 0.03, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [0, 0.02, 0] },
};

/*
Slide1's springAnimation
how user can drag <SlideBox> & how <SlideBox> reacts on button click
*/
const slide1DataForSpring = {
  axisLimitation: 'x',
  animationDelay: 600,
  config: springConfigs.molasses,
};

/*
Slide1's children components specification 
*/
const slide1Box1DataForSides = [
  /* Panel Front */
  {
    /* 
    "sideProps" defines features of individual <SpinningBoxSide>; i.e its exposure (położenie, usytuowanie) within <SlideBox>
    */
    sideProps: { position: [0, 0, 0.455], rotation: [0, 0, 0] },
    /*
    "labelProps" defines features <SpinningBoxSide>'s children components
     */
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'Tworzę',
        'strony internetowe',
        'dla',
        'wymagających Klientów',
      ],
      textPropsPl: [
        { position: [0, 0.5, 0.01] },
        { position: [0, 0.3, 0.01] },
        { position: [0, 0, 0.01] },
        { position: [0, -0.5, 0.01] },
      ],
      fontPl: ['jost', 'jost', 'jost', 'garamont'],
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
    /*
    for <UniversalCanvas>
    */
    canvasProps: {
      image: family,
      format: 'verticalFormat',
    },
    /*
    for <UniversalFrame>
    */
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.455, 0, 0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: ['........'],
      textPropsPl: [{ position: [0, 0, 0.01] }],
      fontPl: ['jost'],
      fontSizePl: [{ ...fontSizesSmall }],
      textAlignPl: ['left'],
      whiteSpacePl: ['normal'],
      MaxWidthFactorPl: [0.01],
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesEn: ['....'],
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
      image: family,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelLeft' },
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
      textLinesPl: ['Niestrudzenie poszukuję idealnego UI...'],
      textPropsPl: [{ position: [0, 0, 0.01] }],
      fontPl: ['jost'],
      fontSizePl: [{ ...fontSizesSmall }],
      textAlignPl: ['left'],
      whiteSpacePl: ['normal'],
      MaxWidthFactorPl: [0.01],
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesEn: ['I look fof ideal UI'],
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
      image: family,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelBack' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * -0.5, 0] },
    labelProps: {
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesPl: [
        'Buduję połączenia pomiędzy domeną technologii i estetyki ',
      ],
      textPropsPl: [{ position: [0, 0, 0.01] }],
      fontPl: ['jost'],
      fontSizePl: [{ ...fontSizesSmall }],
      textAlignPl: ['left'],
      whiteSpacePl: ['normal'],
      MaxWidthFactorPl: [0.01],
      /*
      Pl for <TextSlideFromArray>
      */
      textLinesEn: ['I build connections between technology and aesthetic'],
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
      image: family,
      format: 'verticalFormat',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelRight' },
      format: 'verticalFormat',
      cylinderFi: 0.015,
      sphereRadious: 0.03,
    },
  },
];

export {
  slideSpring,
  slide1Box1Layout,
  slide1Box1DataForSides,
  slide1DataForSpring,
};
