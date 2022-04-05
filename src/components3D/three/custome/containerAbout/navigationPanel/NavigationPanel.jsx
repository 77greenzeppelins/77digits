import React, { useRef } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import TextSlide from '../../textSlides/textSlide/TextSlide';
/*
  Basic Data
  */
import { leftButton, rightButton, rotateButton } from './navigationPanelData';

const NavigationPanel = () => {
  /*
  References
  */
  const leftButtonRef = useRef();
  const rightButtonRef = useRef();

  /*
  JSX
  */
  return (
    <>
      {/*-----Auxiliary Left Button---------------------------------*/}
      <group ref={leftButtonRef} {...leftButton.groupProps}>
        <UniversalFrame {...leftButton.frameProps} />
        {/* <TextSlide {...leftButton.textSlideProps} /> */}
      </group>

      {/*-----Rotate Button---------------------------------*/}
      <group {...rotateButton.groupProps}>
        <UniversalFrame {...rotateButton.frameProps} />
        <TextSlide {...rotateButton.textSlideProps} />
      </group>

      {/*-----Auxiliary Right Button------------------------------*/}
      <group ref={rightButtonRef} {...rightButton.groupProps}>
        <UniversalFrame {...rightButton.frameProps} />
        {/* <TextSlide {...auxiliaryBottomButton.textSlideProps} /> */}
      </group>
    </>
  );
};

export default NavigationPanel;
