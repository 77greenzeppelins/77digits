import React from 'react';
/*
Components
*/
import InstantContactButton from '../../../instantContactButton/InstantContactButton';
/*
Basic Data
*/
import {
  InstantContactButtonPhone,
  InstantContactButtonEmail,
} from '../endButtonsData';

/*
---------------------------------------------------------------------
*/
const InstantContactsSection = () => {
  return (
    <>
      {/*-----Phone Button------------------------------------------*/}
      <InstantContactButton
        groupProps={InstantContactButtonPhone.groupProps}
        canvasProps={InstantContactButtonPhone.canvasProps}
        frameProps={InstantContactButtonPhone.frameProps}
      />
      {/*-----Email Button------------------------------------------*/}
      <InstantContactButton
        groupProps={InstantContactButtonEmail.groupProps}
        canvasProps={InstantContactButtonEmail.canvasProps}
        frameProps={InstantContactButtonEmail.frameProps}
      />
    </>
  );
};

export default InstantContactsSection;
