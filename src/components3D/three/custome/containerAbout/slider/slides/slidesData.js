import containerAboutSlide1_image1 from '../../../../../../assets/textures/containerAbout_Slide1_image1.jpg';

/*
Slide0's Layout
*/
const slide0Box1Layout = {
  mobile: { scale: [0.27, 0.27, 0.27], position: [0, 0, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [-0.1, 0.1, 0] },
};
const slide0Box2Layout = {
  mobile: { scale: [0.25, 0.25, 0.25], position: [0, -0.3, -0.3] },
  desktop: { scale: [0.3, 0.3, 0.3], position: [-0.15, -0.25, -0.3] },
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
      textAwers: 'Laureat prestiżowej nagrody (Nobla?)',
      textRewers: false,
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 1,
      textAwers: 'Przyszłość branży medycznej',
      textRewers: false,
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },

  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      textAwers: false,
      textRewers: 'Autorka wspaniałych dzieł muzycznych',
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 3,
      textAwers: false,
      textRewers: 'Producent unikalnych rozwiązań technicznych',
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },
];

const slide0Box2Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.28], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      textAwers: 'Szefowa wszystkich szefów',
      textRewers: false,
    },
    frameProps: { banner: true },
    canvasProps: { banner: true },
  },
  /* Panel Top */
  {
    sideProps: {
      position: [0, 0.28, -0],
      rotation: [0.5 * Math.PI, 0, 0],
    },
    labelProps: {
      imagesIndex: 1,
      textAwers: 'Twórczyni wybitnego bloga',
      textRewers: false,
    },
    frameProps: { banner: true },
    canvasProps: { banner: true },
  },
  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.28], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      textAwers: 'Bizneswoman dekady!',
      textRewers: false,
    },
    frameProps: { banner: true },
    canvasProps: { banner: true },
  },
  /* Panel Bottom */
  {
    sideProps: { position: [0, -0.28, 0], rotation: [0.5 * Math.PI, 0, 0] },
    labelProps: {
      imagesIndex: 3,
      textAwers: 'Najlepszy strzelec ligi',
      textRewers: false,
    },
    frameProps: { banner: true },
    canvasProps: { banner: true },
  },
];

/*
Slide0's Layout
*/
const slide1Box1Layout = {
  mobile: { scale: [0.27, 0.27, 0.27], position: [0, -0.05, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [-0.05, -0.05, 0] },
};

const slide1Box1Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      texture: containerAboutSlide1_image1,
      textAwers: 'Web developer',
      textRewers: false,
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 1,
      textAwers: 'Programista',
      textRewers: false,
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },

  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.365], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 2,
      textAwers: false,
      // textRewers: 'Autorka podziwianych dzieł muzycznych',
      textRewers: 'UX & UI',
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },

  /* Panel Right */
  {
    sideProps: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 3,
      textAwers: false,
      textRewers: 'Technilogia i sztuka',
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },
];

export {
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box2Layout,
  slide0Box2Data,
  slide1Box1Layout,
  slide1Box1Data,
};
