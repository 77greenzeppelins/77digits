import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
Basic Data
*/
import { slideTransitionConfig, slideDelay, slide1 } from '../../slider2DData';

/*
-------------------------------------------------------------------------------
*/
const Slide1 = ({ slideId }) => {
  /*
  Global State Staff
  canvasState={slide1Part:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId,
    {
      ...slideTransitionConfig,
      delay:
        canvasGlobalState.containerAboutVisibleSlideIndex === slideId
          ? slideDelay.enter
          : slideDelay.leave,
      onRest: () => {
        if (canvasGlobalState.containerAboutVisibleSlideIndex === slideId) {
          canvasState.isSlideComplete = true;
          // console.log(
          //   'Slide1 / onRest  canvasGlobalState.isSlideComplete:',
          //   canvasGlobalState.isSlideComplete
          // );
        }
      },
    }
  );

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div style={styles} className="slide__container">
          <ul>
            <li className="slide__header-wrapper">
              <h3 className="slide__header-text-s1">
                {canvasGlobalState.languageVersion ? (
                  <>
                    <span>{slide1.headerPl[0]}</span> <br />
                    <span>{slide1.headerPl[1]}</span>
                  </>
                ) : (
                  <>
                    <span>{slide1.headerEn[0]}</span> <br />
                    <span>{slide1.headerEn[1]}</span>
                  </>
                )}
              </h3>
            </li>
            <li className="slide__paragraph-wrapper">
              <p className="slide__paragraph-text">{slide1.text1Pl}</p>
            </li>
            <li className="slide__paragraph-wrapper">
              <p className="slide__paragraph-text special">{slide1.text2Pl}</p>
            </li>
          </ul>
        </animated.div>
      )
  );
};

export default Slide1;
