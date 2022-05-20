import React from 'react';
import { useThree } from '@react-three/fiber';

const CanvasStateObserver = () => {
  const canvasState = useThree();
  console.log('<CanvasStateObserver>:', canvasState);
  /*
  renderer info only
  */
  const { gl } = useThree();
  React.useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    console.log('renderer info only', gl.info);
  });

  // console.log(
  //   '<CanvasStateObserver> / scene / <IntroSecton>:',
  //   canvasState.scene.children[1]
  // );
  return null;
};

export default CanvasStateObserver;
