import React from 'react';
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
import { slideTransitionConfig, slideDelay, slide3 } from '../../slider2DData';

/*
-------------------------------------------------------------------------------
*/

const Slide3 = ({ slideId, visibleSlideIndex }) => {
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
              <h3 className="slide__header-text-s3">
                {canvasGlobalState.languageVersion ? (
                  <>
                    <span>{slide3.headerPl[0]}</span> <br />
                    <span>{slide3.headerPl[1]}</span>
                  </>
                ) : (
                  <>
                    <span>{slide3.headerEn[0]}</span> <br />
                    <span>{slide3.headerEn[1]}</span>
                  </>
                )}
              </h3>
            </li>
            <li className="slide__paragraph-wrapper">
              <p className="slide__paragraph-text">{slide3.text1Pl}</p>
            </li>
            {/* <li className="slide__paragraph-wrapper">
              <p className="slide__paragraph-text special">{slide2.text2Pl}</p>
            </li> */}
          </ul>
        </animated.div>
      )
  );
};

export default Slide3;
