import React, {useRef, useEffect, useState } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';
/*
Basic data
*/
const intervalTime = 95;

/*
--------------------------------------------------------------------------
*/
const Loader = () => {
  /*
  App Global State Section
  appState = {isInitialOverlay: true, loaderCookisLink: "loaderVisible"}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Component State
  */
  const [loaderDigits, setLoaderDigits] = useState(0);

  /*
  Interval for counting
  */
  useEffect(() => {
    //___
    const interval = setInterval(() => {
      if (loaderDigits < 100) {
        setLoaderDigits(loaderDigits => loaderDigits + 10);
      }
    }, intervalTime);
    /*
    it happens when interval expires; i.e. <InitialOvewrlay> is closed and all experiences bound with being in 'introContainer' are accesible
    */
    if (loaderDigits === 100) {
      canvasState.loaderCookisLink = 'loaderInvisible'

      // canvasState.isInitialOverlay = false;
      // canvasState.currentContainer = 'introContainer';
    }
    return () => {
      clearInterval(interval);
    };
  }, [loaderDigits, canvasGlobalState.isInitialOverlay]);

  /*
  Spring Section
  */
  // const {springValue} = useSpring({springValue: loaderState? 1 : 0 })
  const {springValue} = useSpring({springValue: canvasGlobalState.loaderCookisLink === 'loaderInvisible'? 0 : 1 })


  return (
    <animated.div className="loader" style={{opacity: springValue}} >
      <span>{loaderDigits}</span> <span>%</span>
    </animated.div>
  );
};

export default Loader;
