/*
Slides Layout
*/

const slide0Box1Layout = {
  mobile: { scale: [0.25, 0.25, 0.25], position: [0, -0.01, 0] },
  desktop: { scale: [0.35, 0.35, 0.35], position: [-0.15, 0.1, 0] },
};
const slide0Box2Layout = {
  mobile: { scale: [0.2, 0.2, 0.2], position: [0, -0.3, -0.3] },
  desktop: { scale: [0.3, 0.3, 0.3], position: [-0.3, -0.25, -0.3] },
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
      textAwers: 'szefowa wszystkich szefowych',
      textRewers: 'Wyjątkowy talent kulinarny',
    },
  },
  /* Panel Left  */
  {
    sideProps: { position: [-0.365, 0, -0], rotation: [0, Math.PI * -0.5, 0] },
    labelProps: {
      imagesIndex: 0,
      textAwers: false,
      textRewers: 'Szwedzki Kucharz',
    },
  },
  /* Panel Right */
  {
    sideProps: { position: [0.365, 0, -0], rotation: [0, Math.PI * 0.5, 0] },
    labelProps: {
      imagesIndex: 1,
      textAwers: false,
      textRewers: '..........',
    },
  },
  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.365], rotation: [0, Math.PI, 0] },
    labelProps: {
      textAwers: 'Autorka muzycznych arcydział',
      textRewers: '..........',
    },
  },
];

const slide0Box2Data = [
  /* Panel Front */
  {
    sideProps: { position: [0, 0, 0.28], rotation: [0, 0, 0] },
    labelProps: {
      textAwers: 'szef wszystkich szefów',
      textRewers: '..........',
    },
  },
  /* Panel Top */
  {
    sideProps: { position: [0, 0.28, -0], rotation: [Math.PI * -0.5, 0, 0] },
    labelProps: {
      textAwers: 'autorka poczytnego bloga',
      textRewers: '..........',
    },
  },
  /* Panel Bottom */
  {
    sideProps: { position: [0, -0.28, 0], rotation: [Math.PI * 0.5, 0, 0] },
    labelProps: {
      textAwers: 'prowadzący lubianą audycję',
      textRewers: '..........',
    },
  },
  /* Panel Back */
  {
    sideProps: { position: [0, 0, -0.28], rotation: [0, Math.PI, 0] },
    labelProps: { textAwers: 'po prostu Janusz', textRewers: '..........' },
  },
];
export { slide0Box1Layout, slide0Box1Data, slide0Box2Layout, slide0Box2Data };
