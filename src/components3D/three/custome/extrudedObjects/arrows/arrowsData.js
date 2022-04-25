import { Vector2 } from 'three';

/*
-------------------------------------------------------------------------
*/
const arrowExtrudeSettings = {
  depth: 0.1,
  bevelEnabled: true,
  bevelSegments: 15,
  bevelThickness: 0.01,
  bevelSize: 0.02,
};

const sharpArrowHorizontalCoordinatesData = [];
sharpArrowHorizontalCoordinatesData.push(new Vector2(0.15, 0)); //strat: center-inner
sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.35, 0.5));
// sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.3, 0.55)); //option
sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.15, 0.5));
sharpArrowHorizontalCoordinatesData.push(new Vector2(0.35, 0)); // center-outher
sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.15, -0.5));
// sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.3, -0.55)); //option
sharpArrowHorizontalCoordinatesData.push(new Vector2(-0.35, -0.5)); //end: center-outher

//from: https://threejs.live/#/webgl_geometry_shapes
// const arrowExtrudeSettings = {
//   depth: 8,
//   bevelEnabled: true,
//   bevelSegments: 4,
//   steps: 4,
//   bevelSize: 1,
//   bevelThickness: 4.5,
// };

export { arrowExtrudeSettings, sharpArrowHorizontalCoordinatesData };
