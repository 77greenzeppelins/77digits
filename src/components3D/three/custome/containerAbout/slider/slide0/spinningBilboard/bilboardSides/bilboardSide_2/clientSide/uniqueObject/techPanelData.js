import { colorsPalette } from '../../../../../../../../../../../data/globalData';
/*
------------------------------------------------------------------
*/
const mesh1Data = {
  meshData: { position: [-0.125, -0.2, 0.01], scale: [1, 1, 1] },
  geometryData: { args: [0.1, 0.09, 8] },
  materialData: {
    wireframe: true,
    color: colorsPalette.venusSkyHexadecimal,
  },
};

/*
Transparent brackets
central "poition-x" accordig to finger=> mesh2: -0.02, mesh3: -0.22
*/

const mesh2Data = {
  meshProps: {
    position: [-0.22, -0.2, 0.01],
    scale: [1, 1, 1],
    rotation: [0, 0, 0.75 * Math.PI],
  },
  geometryProps: [0.15, 0.01, 4, 3, Math.PI * 0.5],
  /*
  
  */
  materialProps: {
    color: colorsPalette.venusSkyHexadecimal,
    opacity: 0.45,
    transparent: true,
  },
};

const mesh3Data = {
  meshProps: {
    position: [-0.02, -0.2, 0.01],
    scale: [1, 1, 1],
    rotation: [0, 0, -0.25 * Math.PI],
  },
};

export { mesh1Data, mesh2Data, mesh3Data };
