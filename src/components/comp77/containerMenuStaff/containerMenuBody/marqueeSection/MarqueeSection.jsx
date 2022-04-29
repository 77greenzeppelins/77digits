import React from 'react';
/*
Components
*/
import Marquee from './marquee/Marquee';

/*
-----------------------------------------------------------------------
*/
const MarqueeSection = () => {
  /*
  JSX
  */
  return (
    <div className="marquee-section__container">
      <Marquee />
    </div>
  );
};

export default MarqueeSection;
