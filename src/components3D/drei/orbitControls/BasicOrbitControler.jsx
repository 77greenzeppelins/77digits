import React from 'react';
//_____3D Components - Drei Staff
import { OrbitControls } from '@react-three/drei';

const BasicOrbitControler = () => {
  return (
    <OrbitControls
      //   enableZoom={false}
      // autoRotate={true}
      // autoRotateSpeed={-3}
      //   minAzimuthAngle={-Math.PI * 0.2}
      //   maxAzimuthAngle={Math.PI * 0.2}
      minPolarAngle={Math.PI * 0.5} // high number = bird perspective
      maxPolarAngle={Math.PI * 0.5} //low number = plane's bottom 'visible'
    />
  );
};

export default BasicOrbitControler;
