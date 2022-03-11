/*
Slides Layout
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
      textAwers: 'Laureatka prestiżowej nagrody',
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
      textAwers: 'Przyszłość tego narodu',
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
      textRewers: 'Autor muzycznych arcydzieł',
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
      textRewers: 'Producent unikalnych rozwiązań',
    },
    frameProps: { portrair: true },
    canvasProps: { portrair: true },
  },
];

/*
----------------------------------------------------------------------
*/

const slide0Box2Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.28], rotation: [0, 0, 0] },
    labelProps: {
      imagesIndex: 0,
      textAwers: 'Szef wszystkich szefów',
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
      textAwers: 'Autorka poczytnego bloga',
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
      textAwers: 'Bizneswoman dekady',
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
export { slide0Box1Layout, slide0Box1Data, slide0Box2Layout, slide0Box2Data };
