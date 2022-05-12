import React from 'react';
/*
Components
*/
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
import UniversalFrame from '../matcapFrames/UniversalFrame';
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
  ({ groupProps, canvasProps, frameProps }, ref) => {
    /*
    JSX
    */
    return (
      <group ref={ref} {...groupProps}>
        <UniversalFrame {...frameProps} />
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
