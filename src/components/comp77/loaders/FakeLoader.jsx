import React, { useState } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSprings, useSpring, config } from '@react-spring/web';
/*
  Basic data
  */
import { images } from './fakeLoaderData';

const delayFactor = 300;

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
    use "images" array to create springConfig object
    */
    images.map((item, index) => {
      const springConfig = {
        // config: { duration: 200 },
        config: config.default,
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300 * index + delayFactor,
      };
      if (item.id === 100) {
        springConfig.onRest = () => setVal(false);
        springConfig.delay = 200 * index + delayFactor * 5;
      }
      return springConfig;
    })
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
    /*
    How onRest() work? 
    My guess: after all animation this method is evaluated; 
    */
    onRest: () => {
      canvasState.isCookiesPopUpMounted = true;
      canvasState.currentContainer = 'introContainer';
      canvasState.fakeLoaderCounter = 1;
    },
  });

  // console.log('FakeLoader / counter', counter);

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
          {springs.map((springConfig, index) => (
            <animated.img
              key={images[index].id}
              src={images[index].image}
              alt={images[index].label}
              className="fake-loader__image"
              style={{
                ...springConfig,
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
