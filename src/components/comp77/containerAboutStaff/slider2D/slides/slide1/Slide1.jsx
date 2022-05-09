import React from 'react';
/*
Components
*/
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
const Slide1 = ({ slideId, visibleSlideIndex, language }) => {
  /*
  Spring Section
  */
  const transition = useTransition(visibleSlideIndex === slideId, {
    ...slideTransitionConfig,
    delay: visibleSlideIndex === slideId ? slideDelay.enter : slideDelay.leave,
  });

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div style={styles} className="slide__container">
          <ul>
            <li className="slide__header-wrapper">
              <h3 className="slide__header-text">
                {language ? (
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
