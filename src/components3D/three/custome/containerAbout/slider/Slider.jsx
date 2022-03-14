import React from 'react';
/*
Components
*/
import Slide0 from './slides/Slide0';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';

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
      <Slide2 slideId={2} />
    </group>
  );
};

export default Slider;
