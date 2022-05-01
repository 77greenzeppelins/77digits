import godsFingerLeft from '../../../../../assets/textures/GodsFinger_onWhite_left.webp';
import godsFingerRight from '../../../../../assets/textures/GodsFinger_onWhite_right.webp';
import { springConfigs } from '../../../../../data/reactSpring';

/*
Data for main containers of 2D / 3D  navPanels
*/
const mainGroupSpringData = {
  //_____3D only
  startingPosition: [0, -1, 0.3],
  endingPosition: [0, -0.245, 0.3],
  delay: 200,
  //_____2D only
  delay2D: 1000,
  //_____common
  config: springConfigs.molasses,
};

const leftButton = {
  groupProps: {
    position: [-0.08, -0.015, 0],
  },
  customeMeshProps: {
    scale: [0.04, 0.04, 0.04],
    rotation: [0, 0, -0.5 * Math.PI],
  },
};

const rightButton = {
  groupProps: {
    position: [0.08, -0.015, 0],
  },
  customeMeshProps: {
    scale: [0.04, 0.04, 0.04],
    rotation: [0, 0, 0.5 * Math.PI],
  },
};

export { mainGroupSpringData, leftButton, rightButton };

/*
const rotateButton = {
  groupProps: {
    // scale: [0.19, 0.19, 0.19],
    // position: [0, -0.567, -0.6],
    scale: [0.09, 0.09, 0.09],
    position: [0, -0.245, 0.3],
    rotation: [0, 0, 0],
  },
  frameProps: { format: 'banner' },
  canvasProps: { format: 'banner' },
  textSlideProps: {
    groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
    textProps: { position: [0, 0, 0] },
    fontSize: { fontSmall: 0.15, fontMedium: 0.25, fontLarge: 0.3 },
    font: 'garamont',
    textLinePl: '?',
    textLineEn: '?',
  },
};

*/
