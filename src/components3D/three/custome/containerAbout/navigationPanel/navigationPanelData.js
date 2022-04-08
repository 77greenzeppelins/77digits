import godsFingerLeft from '../../../../../assets/textures/GodsFinger_onWhite_left.webp';
import godsFingerRight from '../../../../../assets/textures/GodsFinger_onWhite_right.webp';

const leftButton = {
  groupProps: {
    // scale: [0.17, 0.17, 0.17],
    // position: [-0.21, -0.575, -0.6],
    // rotation: [0, 0, Math.PI * 0.5],

    scale: [0.09, 0.09, 0.09],
    position: [-0.1, -0.245, 0.3],
    rotation: [0, 0, Math.PI],
  },
  frameProps: { format: 'portrait' },
  canvasProps: { format: 'portrait', image: godsFingerLeft },
  textSlideProps: {
    groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
    textProps: { position: [0, 0, 0] },
    fontSize: { fontSmall: 0.55, fontMiddle: 0.5, fontLarge: 0.55 },
    font: 'garamont',
    textLinePl: '?',
    textLineEn: '?',
  },
};

const rightButton = {
  groupProps: {
    // scale: [0.17, 0.17, 0.17],
    // position: [0.21, -0.575, -0.6],
    scale: [0.09, 0.09, 0.09],
    position: [0.1, -0.245, 0.3],
    rotation: [0, 0, 0],
  },
  frameProps: { format: 'portrait' },
  canvasProps: { format: 'portrait', image: godsFingerRight },
  textSlideProps: {
    groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
    textProps: { position: [0, 0, 0] },
    fontSize: { fontSmall: 0.55, fontMiddle: 0.5, fontLarge: 0.55 },
    font: 'garamont',
    textLinePl: '?',
    textLineEn: '?',
  },
};

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

export { leftButton, rightButton, rotateButton };
