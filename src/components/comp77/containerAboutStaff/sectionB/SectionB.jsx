import React from 'react';
/*
Components
*/
import NavigationPanel from '../navigationPanel/NavigationPanel';
import Slide2Header from './slides/Slide2Header';
import Slide2Body from './slides/Slide2Body';
/*
Hooks
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Data
*/
const minForTablet = 850;

const SectionB = () => {
  /*
  Hooks
  */
  const windowSize = useWindowSize();
  const slidesArrayNumber = 5;
  const paragraph1Text =
    'Kimkolwiek jesteś, to dobry moment, aby połączyć nasza potencjały';

  /*
  JSX
  */
  return (
    <div
      className={
        windowSize.width < minForTablet
          ? 'sectionB__container-mobile'
          : 'sectionB__container-tablet'
      }
    >
      {/*---Header------------------------------------------*/}
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionB__partA-mobile'
            : 'sectionB__partA-tablet'
        }
      >
        <div className="sectionB__partA-header-container">
          <Slide2Header slideId={2} />
        </div>
        {
          /*
          render only if device is tablet or desktor; i.e. windowSize.width >= minForTablet
          */
          windowSize.width >= minForTablet && (
            <div className="sectionB__partA-navigation-container">
              <NavigationPanel
                slidesArrayNumber={slidesArrayNumber}
                orientation={true}
              />
            </div>
          )
        }
      </div>

      {/*---Body------------------------------------------*/}
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionB__partB-mobile'
            : 'sectionB__partB-tablet'
        }
      >
        <div className="sectionB__partB-body-container">
          <Slide2Body slideId={2} />
        </div>
      </div>
    </div>
  );
};

export default SectionB;
