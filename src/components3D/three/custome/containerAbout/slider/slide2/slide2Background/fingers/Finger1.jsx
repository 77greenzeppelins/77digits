import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../_imageCanvas/ImageCanvas';
// import PlaneForCanvas from '../../../../../_planeForCanvas/PlaneForCanvas';
/*
Assets
*/
import finger1 from '../../../../../../../../assets/textures/containerAbout_Slide2_finger1_325_800.webp';

const Finger1 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={{
          position: [0.7, 0.6, -2],
          rotation: [0, 0.01 * Math.PI, 0.2 * Math.PI],
        }}
        argsWidth={0.325 * 2}
        argsHeight={0.2 * 2}
        image={finger1}
      />

      <ImageCanvas
        meshProps={{
          position: [-0.7, -1.1, -2],
          rotation: [0, 0.01 * Math.PI, -0.8 * Math.PI],
        }}
        argsWidth={0.325 * 2}
        argsHeight={0.2 * 2}
        image={finger1}
      />
    </>
  );
};

export default Finger1;
