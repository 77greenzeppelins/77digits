import React from 'react';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';
/*
-----------------------------------------------------------------------
*/
const TextComponentOfGPTP = ({ progressValue }, props) => {
  // if (
  //   Object.entries(textComponentData).length === 0 &&
  //   !Array.isArray(textComponentData.text)
  // ) {
  //   return;
  // }

  /*
  JSX
  */
  return (
    <div className="text-component-of-GPTP__container">
      <div className="text-component-of-GPTP__text-wrapper progress">
        <animated.p className="text-component-of-GPTP__text ">
          {progressValue.to(v => v.toFixed(0))}
        </animated.p>
      </div>
      <div className="text-component-of-GPTP__text-wrapper percentage">
        <p className="text-component-of-GPTP__text">%</p>
      </div>
    </div>
  );
};

export default TextComponentOfGPTP;
