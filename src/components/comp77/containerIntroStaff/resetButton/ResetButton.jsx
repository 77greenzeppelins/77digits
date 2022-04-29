import React from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';

/*
----------------------------------------------------------------------------
Is used to map 3D pseudobuttons in: 
(1) <ContainerIntro> <EndButtons> at the end of scrolling
(2) <ContainerIntro> / <RaphaelSection> to close section;
*/
const ResetButton = ({ toDo }) => {
  /*
  User Experiences onClick 
  */
  const resetOnClick = e => {
    if (toDo === 'reset') canvasState.endOfContainerIntro = false;
    if (toDo === 'close') canvasState.startOfContainerIntroShow = false;
  };
  return (
    <>
      <button
        style={{ width: '100%', height: '100%' }}
        onClick={resetOnClick}
      />
    </>
  );
};

export default ResetButton;
