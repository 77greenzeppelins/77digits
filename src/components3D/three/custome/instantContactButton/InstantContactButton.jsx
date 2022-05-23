import React from 'react';
/*
Components
*/
import Frame1 from '../_glbComponents/frame/Frame_1';
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
/*
Assets
*/
import mobileImage from '../../../../assets/textures/instantContact_phone.webp';
import emailImage from '../../../../assets/textures/instantContact_email.webp';

/*
Basic Data
*/

/*
----------------------------------------------------------------------------
*/
const InstantContactButton = React.forwardRef(
  ({ groupProps, canvasProps }, ref) => {
    /*
    JSX
    */
    return (
      <group ref={ref} {...groupProps}>
        <Frame1 meshProps={{ scale: [0.65, 1, 0.65] }} />
        {/* <UniversalFrame {...frameProps} /> */}
        <UniversalCanvas
          {...canvasProps}
          image={
            /*
                Why two conditions?
                It works with one in <ContainerInitial> but in <ContainerMenu> some errors occures;
                */
            canvasProps && canvasProps.buttonType === 'phone'
              ? mobileImage
              : emailImage
          }
        />
      </group>
    );
  }
);

export default InstantContactButton;
