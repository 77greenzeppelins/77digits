import React from 'react';
/*
Global State Staff
*/
// import { canvasState } from '../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';
/*
Gesture Staff
*/
// import InitialOverlayGest from '../../../../gestureHandlers/useGesture/InitialOverlayGest';

/*
--------------------------------------------------------------------------
*/
const InitialOverlayMessage = ({ overlayOpacity, messageOpacity }) => {
  /*
  References
  */
  // const dragCondition1 = useRef();
  // const wheelCondition1 = useRef();
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section
  */
  // const {
  //   overlayOpacity,
  //   messageOpacity,
  //   initialOverlayGestListener,
  // } = InitialOverlayGest();

  /*
  JSX
  */
  return (
    <animated.div
      // {...initialOverlayGestListener()}
      style={{
        backgroundColor: 'black',
        opacity: overlayOpacity,
        touchAction: 'none', //prompt from browser's DevTool
      }}
      className="initial-overlay-message__container"
    >
      <animated.div
        style={{
          opacity: messageOpacity,
          width: '100px',
          height: '100px',
          backgroundColor: 'white',
        }}
      />
    </animated.div>
  );
};

export default InitialOverlayMessage;
