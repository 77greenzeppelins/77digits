/*
Always use for wrapping <group>
scale: [0.1,0.1,0.1]
*/

const andSignConfig = {
  meshProps: { scale: [0.19, 0.19, 0.19] },
  fontExtrudeSettings: {
    size: 0.7,
    height: 0.03,
    bevelEnabled: true,
    curveSegments: 8,
    bevelThickness: 0.01,
    bevelSize: 0.005,
  },
  text: '&',
};

const circledPathConfig = {
  meshProps: { rotation: [0, 1.1 * Math.PI, 0], position: [0.25, -0.2, -0.05] },
};
export { andSignConfig, circledPathConfig };
