/*
Data for portrait frame
Concept: define three basic formats; then use scale to get diversity;
*/
const portraitWidth = [
  { position: [0, 0.41, 0], rotation: [0, 0, Math.PI * 0.5] },
  { position: [0, -0.41, 0], rotation: [0, 0, Math.PI * 0.5] },
];
const portraitHeight = [
  { position: [0.31, 0, 0], rotation: [0, 0, 0] },
  { position: [-0.31, 0, 0], rotation: [0, 0, 0] },
];
//___order: topLeft / topRight / bottomLeft / bottomRight
const portraitCorners = [
  [-0.305, 0.405, 0.0],
  [0.305, 0.405, 0.0],
  [-0.305, -0.405, 0.0],
  [0.305, -0.405, 0.0],
];

/*
Data for portrait frame
Concept: define three basic formats; then use scale to get diversity;
*/
// const landscapeWidth = [
//   { position: [0, 0.41, 0], rotation: [0, 0, Math.PI * 0.5] },
//   { position: [0, -0.41, 0], rotation: [0, 0, Math.PI * 0.5] },
// ];
// const landscapeHeight = [
//   { position: [0.31, 0, 0], rotation: [0, 0, 0] },
//   { position: [-0.31, 0, 0], rotation: [0, 0, 0] },
// ];
// //___order: topLeft / topRight / bottomLeft / bottomRight
// const landscapeCorners = [
//   [-0.305, 0.405, 0.0],
//   [0.305, 0.405, 0.0],
//   [-0.305, -0.405, 0.0],
//   [0.305, -0.405, 0.0],
// ];

//___used <...Canvas> to set plane's args={width, height}; ratio = 1.3444
//___in Inkscape I can use: width: 600px / height: 806px;

const portraitWidthSize = 0.58;
const portraitHeightSize = 0.78;

/*
Data for portrait frame
Concept: define three basic formats; then use scale to get diversity;
*/
const bannerWidth = [
  { position: [0, 0.21, 0], rotation: [0, 0, Math.PI * 0.5] },
  { position: [0, -0.21, 0], rotation: [0, 0, Math.PI * 0.5] },
];
const bannerHeight = [
  { position: [0.51, 0, 0], rotation: [0, 0, 0] },
  { position: [-0.51, 0, 0], rotation: [0, 0, 0] },
];
//___order: topLeft / topRight / bottomLeft / bottomRight
const bannerCorners = [
  [-0.505, 0.205, 0.0],
  [0.505, 0.205, 0.0],
  [-0.505, -0.205, 0.0],
  [0.505, -0.205, 0.0],
];
//___used <...Canvas> to set plane's args={width, height}; ratio = 2.5789
//___in Inkscape use: width: 774px / height: 300px;
const bannerWidthSize = 0.98;
const bannerHeightSize = 0.38;

/*
Data used  <...Canvas> 
*/
const sizeFactor = 0.02;

/*
Data for canvases
*/

export {
  //___used in <UniversalFrame>
  portraitWidth,
  portraitHeight,
  portraitCorners,
  portraitWidthSize,
  portraitHeightSize,
  bannerWidth,
  bannerHeight,
  bannerCorners,
  //___used in <UniversalFrame> and <...Canvas>
  bannerWidthSize,
  bannerHeightSize,
  sizeFactor,
};
