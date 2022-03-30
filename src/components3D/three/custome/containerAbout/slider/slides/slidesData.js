//
import dama from '../../../../../../assets/textures/containerAbout_Slide0_box1_image1.png';
import david from '../../../../../../assets/textures/containerAbout_Slide0_box_1_image3.webp';
//
import box1 from '../../../../../../assets/textures/containerAbout_Slide0_box2_image1.png';
import box2 from '../../../../../../assets/textures/containerAbout_Slide0_box2_image2.png';
//
import family from '../../../../../../assets/textures/containerAbout_Slide1_image1.jpg';
//
import { springConfigs } from '../../../../../../data/reactSpring';

/*
BasicData
*/
const fontSizes = { fontSmall: 0.06, fontMedium: 0.07, fontLarge: 0.08 };
/*
Slide0 General Settings
*/
const slideSpring = {
  visiblePosition: 0,
  hiddenPositionX: -1,
  hiddenPositionY: 1,
  hiddenPositionZ: -2,
  config: springConfigs.configBasic,
};

/*
Slide0 / Box1 => portreit
*/
const slide0Box1Layout = {
  mobile: { scale: [0.27, 0.27, 0.27], position: [0, 0, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [-0.1, 0.1, 0] },
};

const slide0Box1DataForSpring = {
  /* necessary for <SpinningBox>'s gestures animation */
  axisLimitation: 'x',
  /* necessary for <SpinningBoxside>'s autorotation spring animation */
  config: springConfigs.molasses,
  animationDelay: 9000,
};

const slide0Box2DataForSpring = {
  /* necessary for <SpinningBox>'s gestures animation */
  axisLimitation: 'y',
  /* necessary for <SpinningBoxside>'s autorotation spring animation */
  config: springConfigs.molasses,
  animationDelay: 12000,
};

/*
"textAwers: false" and "textRewers: false" requires "imagesIndex: X-number"
keep "imagesIndex" order; this props is used in <SpinningBox> to specify index in array of images
*/
const slide0Box1Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      format: 'portrait',
      textAwers: 'Laureat prestiżowej nagrody (Nobla?)',
      textRewers: false,
      textPosition: [0, 0, 0.01],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: dama,
      format: 'portrait',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'portrait',
    },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 1,
      format: 'portrait',
      textAwers: 'Przyszłość branży medycznej',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: dama,
      format: 'portrait',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'portrait',
    },
  },

  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      format: 'portrait',
      textAwers: false,
      textRewers: 'Twórczyni wybitnych dzieł artystycznych',
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: david,
      format: 'portrait',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'portrait',
    },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 3,
      format: 'portrait',
      textAwers: false,
      textRewers: 'Producent unikalnych rozwiązań technicznych',
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: david,
      format: 'portrait',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'portrait',
    },
  },
];

/*
Slide0 / Box2 =>banner
*/
const slide0Box2Layout = {
  mobile: { scale: [0.25, 0.25, 0.25], position: [0, -0.3, -0.3] },
  desktop: { scale: [0.3, 0.3, 0.3], position: [-0.15, -0.25, -0.3] },
};

const slide0Box2Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.28], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      format: 'banner',
      textAwers: 'Szefowa wszystkich szefów',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: box1,
      format: 'banner',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'banner',
    },
  },
  /* Panel Top */
  {
    sideProps: {
      position: [0, 0.28, -0],
      rotation: [0.5 * Math.PI, 0, 0],
    },
    labelProps: {
      imagesIndex: 1,
      format: 'banner',
      textAwers: 'Autorka poczytnego bloga',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: box2,
      format: 'banner',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'banner',
    },
  },
  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.28], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      format: 'banner',
      textAwers: 'Bizneswoman dekady!',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: box1,
      format: 'banner',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'banner',
    },
  },
  /* Panel Bottom */
  {
    sideProps: { position: [0, -0.28, 0], rotation: [0.5 * Math.PI, 0, 0] },
    labelProps: {
      imagesIndex: 3,
      format: 'banner',
      textAwers: 'Najlepszy strzelec ligi',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: box2,
      format: 'banner',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'banner',
    },
  },
];

/*
Slide1's Layout
it actually define <SlideBox>'s scale & position depending on device size;
*/
const slide1Box1Layout = {
  mobile: { scale: [0.27, 0.27, 0.27], position: [0, -0.05, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [-0.05, -0.05, 0] },
};

/*
Slide1's children components specification 
*/
const slide1Box1DataForSides = [
  /* Panel Front */
  {
    /* "sideProps" defines features of individual <SpinningBoxSide>; i.e its location within <SlideBox> */
    sideProps: { position: [0, 0, 0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      format: 'column',
      textAwers: 'Web developer',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: family,
      format: 'column',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelFront' },
      format: 'column',
    },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 1,
      format: 'column',
      textAwers: 'Programista',
      textRewers: false,
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: family,
      format: 'column',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelLeft' },
      format: 'column',
    },
  },

  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      format: 'column',
      textAwers: false,
      // textRewers: 'Autorka podziwianych dzieł muzycznych',
      textRewers: 'poszukuję idealnego UI',
      textPosition: [0, 0, 0.017],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: family,
      format: 'column',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelBack' },
      format: 'column',
    },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 3,
      format: 'column',
      textAwers: false,
      textRewers:
        'komponuję cyfrowe rozwiązania poprzez syntezę technologii i estetyki ',
      textPosition: [0, 0, 0.015],
      // font: 'garamont',
      fontSizes: { ...fontSizes },
      textAlign: 'center',
      whiteSpace: 'normal',
      MaxWidthFactor: 0.01,
    },
    canvasProps: {
      image: family,
      format: 'column',
    },
    frameProps: {
      groupProps: { name: 'groupForPanelRight' },
      format: 'column',
    },
  },
];
const slide1DataForSpring = {
  axisLimitation: 'x',
  animationDelay: 12000,
  config: springConfigs.molasses,
};

export {
  slideSpring,
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box2Layout,
  slide0Box2Data,
  slide1Box1Layout,
  slide1Box1DataForSides,
  slide1DataForSpring,
  slide0Box1DataForSpring,
  slide0Box2DataForSpring,
};
