import React from 'react';
import { Html } from '@react-three/drei';
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
const InstantContactHTMLButton = ({ groupProps, canvasProps }) => {
  /*
  JSX
  */
  return (
    <group {...groupProps}>
      <Frame1 meshProps={{ scale: [0.65, 1, 0.65] }} />
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
};

export default InstantContactHTMLButton;
