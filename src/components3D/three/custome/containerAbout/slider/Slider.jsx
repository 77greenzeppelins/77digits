import React from 'react';
/*
Components
*/
import Slide0 from './slides/Slide0';
import Slide1 from './slides/Slide1';

/*
-----------------------------------------------------------------
*/
const Slider = () => {
  /*
  JSX
  */
  return (
    <group>
      <Slide0 slideId={0} />
      <Slide1 slideId={1} />
    </group>
  );
};

export default Slider;
