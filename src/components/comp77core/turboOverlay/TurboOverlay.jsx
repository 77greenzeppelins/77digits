import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
------------------------------------------------------------------------
*/
const TurboOverlay = () => {
  /*
  Global State Section
  canvasState = {..., isTurboOverlayActive: 0,}
  */
  const globalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const overlayTransition = useTransition(globalState.isTurboOverlayActive, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // config: { duration: 3000 },
    // config: config.molasses,
  });
  /*
  JSX
  */
  return overlayTransition(
    (styles, item) =>
      item && (
        <>
          <animated.div className="multipurposeOverlay" style={styles} />
        </>
      )
  );
};

export default TurboOverlay;
