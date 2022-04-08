const instancedQuestionMarkData = [
  {
    position: [-0.1, -0.05, 0.02],
    scale: [0.4, 0.4, 0.4],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, 0.4 * Math.PI, 0.7 * Math.PI],
  },
  {
    position: [-0.05, -0.1, 0.02],
    // positionStart: [-0.05, -0.1, 0.02],
    // positionEnd: [-0.05, -0.1, 0.19],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, 0.4 * Math.PI, 0.7 * Math.PI],
    scale: [0.5, 0.5, 0.5],
  },
  {
    position: [-0.07, -0.15, 0.02],
    // positionStart: [-0.07, -0.15, 0.02],
    // positionEnd: [-0.07, -0.15, 0.19],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, -0.1 * Math.PI, 0.2 * Math.PI],
    scale: [0.3, 0.3, 0.3],
  },
  {
    position: [0, -0.2, 0.09],
    // positionStart: [0, -0.2, 0.02],
    // positionEnd: [0, -0.2, 0.19],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, 0.35 * Math.PI, -0.1 * Math.PI],
    scale: [1, 1, 1],
  },
  {
    scale: [0.2, 0.2, 0.2],
    position: [0.15, 0.0, 0.02],
    rotation: [0, 0, -0.1 * Math.PI],
    rotationStart: [0, 0, 0.35 * Math.PI],
    rotationEnd: [0, 0.35 * Math.PI, -0.1 * Math.PI],
  },
  {
    scale: [0.3, 0.3, 0.3],
    position: [0.12, -0.07, 0.02],
    rotation: [0, 0, -0.2 * Math.PI],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, 0.35 * Math.PI, -0.1 * Math.PI],
  },
  {
    scale: [0.35, 0.35, 0.35],
    position: [0.1, -0.05, 0.02],
    rotation: [0, 0, -0.2 * Math.PI],
    rotationStart: [0, 0, 0],
    rotationEnd: [0, 0.35 * Math.PI, -0.1 * Math.PI],
  },
];

const basicTextGeometryDate = {
  textGeometryProps: {
    size: 0.17,
    height: 0.005,
    // curveSegments: 2,
    bevelThickness: 0.01,
    bevelSize: 0.005,
    bevelEnabled: true,
  },
  text: '?',
};
export { instancedQuestionMarkData, basicTextGeometryDate };
