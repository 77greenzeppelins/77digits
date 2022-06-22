import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useWindowSize = () => {
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
  State => value in form of object: {width: xxx, height: xxx}
  */
  const [windowSize, setWindowSize] = useState(getWindowSize);

  /*
  Responsivenes
  */
  useEffect(() => {
    /*
    Event handler with "debounce feature"
    */
    const resizeHandler = () =>
      debounce(() => setWindowSize(getWindowSize()), 100);
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
  return windowSize;
};

export default useWindowSize;
