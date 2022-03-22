import React from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
/*
Assets
*/
import venus from '../../../../../assets/textures/venus_2.png';
/*
Basic Data
*/
import { phoneButton, emailButton } from './instantContactData';

/*
-----------------------------------------------------------------------------
*/
const InstantContact = () => {
  return (
    <group position={[0, 0, -27.5]}>
      {/*-----Phone Button------------------------------------------*/}
      <group
        {...phoneButton.groupProps}
        //    scale={[0.335, 0.335, 0.335]} position={[0, 0.2, 0]}
      >
        <UniversalFrame
          {...phoneButton.frameProps}
          //  portrait={true} format="portrait"
        />

        <UniversalCanvas
          {...phoneButton.canvasProps}
          //  image={venus} portrait={true} format="portrait"
        />
      </group>

      {/*-----Reset Button------------------------------------------*/}

      {/*-----Email Button------------------------------------------*/}
      <group {...emailButton.groupProps}>
        <UniversalFrame {...emailButton.frameProps} />
        <UniversalCanvas {...emailButton.canvasProps} />
      </group>
    </group>
  );
};

export default InstantContact;
