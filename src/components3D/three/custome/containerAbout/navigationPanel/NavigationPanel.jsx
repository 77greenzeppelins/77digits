import React, { useRef, Suspense } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
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
    <Suspense fallback={null}>
      {/*-----Auxiliary Left Button---------------------------------*/}
      <group ref={leftButtonRef} {...leftButton.groupProps}>
        <UniversalFrame {...leftButton.frameProps} />
        <UniversalCanvas {...leftButton.canvasProps} />
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
        <UniversalCanvas {...rightButton.canvasProps} />
      </group>
    </Suspense>
  );
};

export default NavigationPanel;
