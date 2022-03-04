import { useState, useEffect } from 'react';
/*
...
*/
import { isMobileOnly } from 'react-device-detect';

/*
-----------------------------------------------------------------------
*/
const useOrientation = () => {
  /*
  Window size getter
  */
  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  /*
  State
  */
  const [isMobile, setIsMobile] = useState(isMobileOnly);

  /*
  Responsivenes
  */
  useEffect(() => {
    /*
    Event handler with "debounce feature"
    */
    // const resizeHandler = () =>
    //   debounce(() => setWindowSize(getWindowSize()), 100);
    const resizeHandler = () => setIsMobile(isMobileOnly);

    /*
    Event registration
    */
    window.addEventListener('resize', resizeHandler());
    /*
    Event cancellation
    */
    return () => window.removeEventListener('resize', resizeHandler());
  }, []);

  /*
    Final retrurned value
    */
  return isMobile;
};

export default useOrientation;
