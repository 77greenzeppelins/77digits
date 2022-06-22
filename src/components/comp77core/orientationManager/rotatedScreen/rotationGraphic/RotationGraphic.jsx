import React from 'react';
/*
Components
*/
import RotatingPhone from '../../../../comp77/svgComponents/rotatingPhone/RotatingPhone';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring, config } from '@react-spring/web';

/*
-------------------------------------------------------------------------------
*/
const RotationGraphic = ({ mountCondition }) => {
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: mountCondition ? 1 : 0 },
    // config: mountCondition ? config.molasses : { duration: 0 },
    // delay: mountCondition ? 600 : 0,
  });
  /*
  JSX
  */
  return (
    <animated.div
      className="rotation-graphic__container"
      style={{ opacity: opacity }}
    >
      <div className="rotation-graphic__phone-wrapper">
        <RotatingPhone />
      </div>
      <div className="rotation-graphic__text-wrapper">6 C</div>
    </animated.div>
  );
};

export default RotationGraphic;
