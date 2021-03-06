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

//___used <...Canvas> to set plane's args={width, height}; ratio = 0.743
//___in Inkscape I can use: width: 600px / height: 806px;

const portraitWidthSize = 0.58;
const portraitHeightSize = 0.78;

/*
Data for column frame
*/
const columnWidth = [
  { position: [0, 0.71, 0], rotation: [0, 0, Math.PI * 0.5] },
  { position: [0, -0.71, 0], rotation: [0, 0, Math.PI * 0.5] },
];
const columnHeight = [
  /*
  setting value "x" vertical bar is moc
  */
  { position: [0.31, 0, 0], rotation: [0, 0, 0] },
  { position: [-0.31, 0, 0], rotation: [0, 0, 0] },
];
//___order: topLeft / topRight / bottomLeft / bottomRight
const columnCorners = [
  [-0.305, 0.705, 0.0],
  [0.305, 0.705, 0.0],
  [-0.305, -0.705, 0.0],
  [0.305, -0.705, 0.0],
];

//___used <...Canvas> to set plane's args={width, height}; ratio = 0.42
//___in Inkscape I can use: width: 420px / height: 1000px;

const columnWidthSize = 0.58;
const columnHeightSize = 1.38;

/*
Data for verticalFormat frame
*/

const verticalFormatWidth = [
  { position: [0, 0.71, 0], rotation: [0, 0, Math.PI * 0.5] },
  { position: [0, -0.71, 0], rotation: [0, 0, Math.PI * 0.5] },
];
const verticalFormatHeight = [
  /*
  setting value "x" vertical bar is moc
  */
  { position: [0.41, 0, 0], rotation: [0, 0, 0] },
  { position: [-0.41, 0, 0], rotation: [0, 0, 0] },
];
//___order: topLeft / topRight / bottomLeft / bottomRight
const verticalFormatCorners = [
  [-0.405, 0.705, 0.0],
  [0.405, 0.705, 0.0],
  [-0.405, -0.705, 0.0],
  [0.405, -0.705, 0.0],
];

//___used <...Canvas> to set plane's args={width, height}; ratio = 0.42
//___in Inkscape I can use: width: 420px / height: 1000px;

const verticalFormatWidthSize = 0.77;
const verticalFormatHeightSize = 1.38;

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
Data used in  <UniversalCanvas> 
*/
const sizeFactor = 0.02;

export {
  //___for portret; used in <UniversalFrame> &<UniversalCanvas>
  portraitWidth,
  portraitHeight,
  portraitCorners,
  portraitWidthSize,
  portraitHeightSize,
  //___for banner; used in <UniversalFrame> &<UniversalCanvas>
  bannerWidth,
  bannerHeight,
  bannerCorners,
  bannerWidthSize,
  bannerHeightSize,
  //___for column; used in <UniversalFrame> &<UniversalCanvas>
  columnWidth,
  columnHeight,
  columnCorners,
  columnWidthSize,
  columnHeightSize,
  //___for verticalFormat; used in <UniversalFrame> &<UniversalCanvas>
  verticalFormatWidth,
  verticalFormatHeight,
  verticalFormatCorners,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  //___dditional size factor to correct canvas
  sizeFactor,
};
