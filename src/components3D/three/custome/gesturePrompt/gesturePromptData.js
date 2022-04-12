/*
{springConfigs: [configBasic, molasses]}
*/
import { springConfigs } from '../../../../data/reactSpring';

const gesturePromtBasicData = {
  meshProps: { position: [-0.17, -0.33, 0] },
  circleGeometry: { args: [0.0015, 10] },
};

const caDragSpinningBox = {
  from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
  to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
  config: { ...springConfigs.molasses },
  // loop: () => 1 > counter.current++,
  delay: 400,
};

const caDragSpinningBoxArray = [
  {
    id: 1,
    from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
    to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
    config: { ...springConfigs.molasses },
    // loop: () => 1 > counter.current++,
    delay: 400,
  },
  {
    id: 2,
    from: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
    to: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
    config: { ...springConfigs.molasses },
    // loop: () => 1 > counter.current++,
    delay: 400,
  },
  {
    id: 3,
    from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
    to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
    config: { ...springConfigs.molasses },
    // loop: () => 1 > counter.current++,
    delay: 400,
  },
];

export { gesturePromtBasicData, caDragSpinningBox, caDragSpinningBoxArray };

// const caDragSpinningBox = ()=>{
//       return {
//         from: { position: [-0.1, -0.33, 0], scale: [0, 0, 0] },
//         to: { position: [0.1, -0.33, 0], scale: [1, 1, 1] },
//         config: { duration: 1600 },
//         // loop: () => 1 > counter.current++,
//         delay: 400,
//       }
// }
