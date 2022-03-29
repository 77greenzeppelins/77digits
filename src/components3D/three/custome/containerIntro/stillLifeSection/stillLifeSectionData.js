import venus from '../../../../../assets/textures/stillLife_1.1.webp';

const paintingData = {
  desktopGroupProps: {
    name: 'GroupForVenusInFrame',
    position: [0, -0.75, -9.3],
    scale: [1.5, 1.5, 1.5],
    rotation: [0, 0.2 * Math.PI, 0],
  },
  mobileGroupProps: {
    name: 'GroupForVenusInFrame',
    position: [-0.05, -0.35, -9.4],
    scale: [1.2, 1.2, 1.2],
    rotation: [0, 0.2 * Math.PI, 0],
  },
  canvasProps: { image: venus, format: 'portrait' },
  frameProps: {
    groupProps: { name: 'groupForFrameOfVenusInFrame' },
    format: 'portrait',
  },
};

export { paintingData };
