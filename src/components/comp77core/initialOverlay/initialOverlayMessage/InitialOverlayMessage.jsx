import React from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Components
*/
import InitialOverlayArtDeco from '../../../comp77/svgComponents/initialOverlayArtDeco/InitialOverlayArtDeco';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';
/*
Gesture Staff
*/
// import InitialOverlayGest from '../../../../gestureHandlers/useGesture/InitialOverlayGest';
/*
Hook Staff
*/
import useWindowSize from '../../../../hooks/useWindowSize';

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
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section
  */
  // const {
  //   overlayOpacity,
  //   messageOpacity,
  //   initialOverlayGestListener,
  // } = InitialOverlayGest();

  /*
  Hook
  */
  const { height } = useWindowSize();

  // useEffect(() => {
  //   let svgHeight = height * 0.8;
  //   let svgWidth = svgHeight * 0.55625;
  //   console.log('InitialOverlayMessage / height:', height);
  //   console.log('InitialOverlayMessage / svgHeight:', svgHeight);
  //   console.log('InitialOverlayMessage / svgWidth:', svgWidth);
  // }, [height, width]);

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
        }}
      >
        <InitialOverlayArtDeco
          /*
          size of SVG: "height" should by 80% of "screenSize"; "width" just need to keep aspect ratio of original image that is: 445/800 = 0.55625
          */
          // height={height * 0.8}
          // width={height * 0.8 * 0.55625}
          respheight={height} //can't be in camelCase!!!
          language={canvasGlobalState.languageVersion}
        />
      </animated.div>
    </animated.div>
  );
};

export default InitialOverlayMessage;
