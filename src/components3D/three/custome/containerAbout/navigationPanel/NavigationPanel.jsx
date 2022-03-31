import React, { useRef } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
/*
  Basic Data
  */
import { leftButton, rightButton } from './navigationPanelData';

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
      {/*-----Auxiliary Top Button---------------------------------*/}
      <group ref={leftButtonRef} {...leftButton.groupProps}>
        <UniversalFrame {...leftButton.frameProps} />
        {/* <TextSlide {...leftButton.textSlideProps} /> */}
      </group>

      {/*-----Auxiliary Bottom Button------------------------------*/}
      <group ref={rightButtonRef} {...rightButton.groupProps}>
        <UniversalFrame {...rightButton.frameProps} />
        {/* <TextSlide {...auxiliaryBottomButton.textSlideProps} /> */}
      </group>
    </>
  );
};

export default NavigationPanel;
