/*
{springConfigs: [configBasic, molasses]}
*/
// import { springConfigs } from '../../../../data/reactSpring';

const gesturePromtBasicData = {
  meshProps: { position: [-0.17, -0.33, 0] },
  circleGeometry: { args: [0.005, 10] },
};

const caRotateSpinningBox = {
  valueX: [-0.1, 0.1],
  positionY: -0.33,
  config: { duration: 1000 },
  // scaleRange: [0, 0.15, 0.5, 0.85, 1],
  // scaleValues: [0, 1.8, 2, 1.8, 0],
  scaleRange: [0, 0.1, 0.5, 0.9, 1],
  scaleValues: [0, 0.5, 1, 0.5, 0],
  aPositionYRange: [0, 0.1, 0.5, 0.9, 1],
  aPositionYValues: [0, -0.01, -0.05, -0.01, 0],

  // config: { ...springConfigs.molasses },
};

export { gesturePromtBasicData, caRotateSpinningBox };

//_____________________________________________________________________
// const caDragSpinningBox = ()=>{
//       return {
//         from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
//         to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
//         config: { duration: 1600 },
//         // loop: () => 1 > counter.current++,
//         delay: 400,
//       }
// }

// const caDragSpinningBoxArray = [
//   {
//     id: 'one',
//     from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
//     to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
//     config: { ...springConfigs.molasses },
//     // loop: () => 1 > counter.current++,
//     // delay: 400,
//   },
//   {
//     id: 'two',
//     from: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
//     to: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
//     config: { ...springConfigs.molasses },
//     // loop: () => 1 > counter.current++,
//     // delay: 1200,
//   },
// ];
