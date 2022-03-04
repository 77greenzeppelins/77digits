import React, { useRef, useEffect, useState, useMemo } from 'react';
/*
Assets
*/
import image0 from '../../../assets/images/0_2.png';
import image1 from '../../../assets/images/1_1.jpg';
import image7 from '../../../assets/images/7_1.jpg';
// import image10 from '../../../assets/images/10_1.jpg';
import image23 from '../../../assets/images/23_3.jpg';
import image33 from '../../../assets/images/33_1.jpg';
import image50 from '../../../assets/images/50_1.jpg';
import image51 from '../../../assets/images/51_1.jpg';
import image63 from '../../../assets/images/63_1.jpg';
import image85 from '../../../assets/images/85_1.jpg';
import image77 from '../../../assets/images/77_1.jpg';
import image78 from '../../../assets/images/78_1.jpg';
import image94 from '../../../assets/images/94_1.jpg';
import image100 from '../../../assets/images/100_3.png';

/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSprings, useSpring } from '@react-spring/web';
/*
  Basic data
  */
const delayFactor = 200;

/*
--------------------------------------------------------------------------
*/
const FakeLoader = () => {
  /**
  Components State 
  */
  const [val, setVal] = useState(true);
  /*
  Global State Section
  appState = {isInitialOverlay: true, loaderCookisLink: "loaderVisible"}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Basic data
  Why don't we store this data in separate file?
  last piece of config includes "onRest: () => setVal(false)"
  
  */
  const images = useMemo(
    () => [
      {
        id: 0,
        src: image0,
        label: 'obrazek z numerem 0',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 200,
      },
      {
        id: 1,
        src: image1,
        label: 'obrazek z numerem 1',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2 * delayFactor,
      },
      {
        id: 7,
        src: image7,
        label: 'obrazek z numerem 7',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3 * delayFactor,
      },
      {
        id: 23,
        src: image23,
        label: 'obrazek z numerem 23',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 4 * delayFactor,
      },
      {
        id: 33,
        src: image33,
        label: 'obrazek z numerem 33',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 5 * delayFactor,
      },
      {
        id: 50,
        src: image50,
        label: 'obrazek z numerem 50',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 6 * delayFactor,
      },
      {
        id: 51,
        src: image51,
        label: 'obrazek z numerem 51',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 7 * delayFactor,
      },
      {
        id: 63,
        src: image63,
        label: 'obrazek z numerem 63',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 8 * delayFactor,
      },
      {
        id: 77,
        // url: '#FF0099',
        src: image77,
        label: 'obrazek z numerem 77',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 9 * delayFactor,
      },
      {
        id: 78,
        src: image78,
        label: 'obrazek z numerem 78',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 11 * delayFactor,
      },
      {
        id: 85,
        src: image85,
        label: 'obrazek z numerem 85',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 12 * delayFactor,
      },
      {
        id: 94,
        src: image94,
        label: 'obrazek z numerem 94',
        config: { duration: 0 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 13 * delayFactor,
      },
      {
        id: 100,
        src: image100,
        label: 'obrazek z numerem 100',
        config: { duration: 200 },
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 14 * delayFactor,
        onRest: () => setVal(false),
      },
    ],
    []
  );
  /*
  useSprings Section
  It starts as page starts loading
  Final result is achieved by changing component state within onRest()
  This change triggers useSpring 
  */
  const springs = useSprings(
    /*
    create the following number of "springs"
    */
    images.length,
    /*
    use the above array of "spring configurations" for each individual spring
    */
    images.map(({ ...springConfig }) => springConfig)
  );
  /*
  useSpring Section
  Final result is "opacity: 0" of ".fake-loader__container"
  It's short-term solution i.e. in final version the whole <FakeLoader>'s parent must get "display: none" or dismount... 
  */
  const { springValue } = useSpring({
    springValue: val ? 1 : 0,
    /*
    Why "delay" ?
    This spring wait until useSprings() ends; it's a sort of "primitive hardcoding" approach;
    */
    delay: 400,
    // onRest: () => (canvasState.currentContainer = 'initalContainer'),
    // onRest: () => (canvasState.isCookiesPopUpMounted = true),
    /*
    How onRest() work? 
    My guess: after all animation this method is evaluated; 
    */
    onRest: () => {
      canvasState.isCookiesPopUpMounted = true;
      canvasState.fakeLoaderCounter = 1;
    },
  });

  /*
  useEffect
  */
  useEffect(() => {
    console.log(
      'canvasGlobalState.currentContainer:',
      canvasGlobalState.currentContainer
    );
    console.log('val:', val);
  }, [val, canvasGlobalState.currentContainer]);

  return (
    /*
    What this condition "canvasGlobalState.fakeLoaderCounter === 0" does??
    There was an issue: <Cookies> is mounted; user click "więcej informacji" and goes to <CookiesPage>; then click browser "backward arrow" of mouse "left side button" and went back to <MainPage>; what user sees are <FakeLoader> buring animation and <Cookies>; both components overlap...
    Solution: restrict <FakeLoader> animation to only one "show" during initila page loading + value "fakeLoaderCounter === 1" is set in useSpring() above;
    */
    canvasGlobalState.fakeLoaderCounter === 0 && (
      <animated.div
        className="fake-loader__container"
        style={{ opacity: springValue }}
      >
        <div className="fake-loader__images-container">
          {/* Let's use springs to creat components */}
          {springs.map((spring, index) => (
            <animated.img
              key={images[index].id}
              src={images[index].src}
              alt={images[index].label}
              className="fake-loader__image"
              style={{
                ...spring,
                backgroundColor: images[index].url,
              }}
            />
          ))}
        </div>
        <div className="fake-loader__percentage">
          <p>%</p>
        </div>
      </animated.div>
    )
  );
};

export default FakeLoader;
