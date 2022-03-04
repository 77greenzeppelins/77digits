import React from 'react';

const SevenSevenLights = () => {
  //_____
  const config = {
    color: [1, 1, 1],
    intensity: 1,
    distance: 1,
    decay: 1,
  };
  return (
    <>
      {/* <pointLight
        position={[0, 0, 150]}
        // {...config}
        args={[0xff00ff, 0.2, 1]}
      /> */}
      <spotLight
        // ref={light}
        castShadow
        position={[0, 0, 300]}
        color={[1, 1, 1]}
        intensity={0.79}
        penumbra={0.1}
        // depthBuffer={depthBuffer}
        angle={0.5}

        //
      />
    </>
  );
};

export default SevenSevenLights;
