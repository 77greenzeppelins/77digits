import React from 'react';
/*
Components
*/
import VenusInFrame from './venus/VenusInFrame';
import ScrollBaner from './scrollBaner/ScrollBaner';
/*
Gesture Staff
*/
import BasicMove from '../../../../../gestureHandlers/useMove/basicMove';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic Data
"tillFactor" for sake of "BasicMove"
*/
const tillFactor = 0.02;
/*

/*
------------------------------------------------------------------------
*/
const FramedObjects = ({ groupProps }) => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactor: tillFactor,
    // initialRotation: [groupProps.rotation],
  });

  return (
    <a.group {...groupProps} rotation={rotateWithMouseMove}>
      <VenusInFrame
        groupProps={{
          name: 'GroupForLogoInFrame',
          position: [0, 0.03, 0.4],
          scale: [0.8, 0.8, 0.8],
          // position: [0, 0, 0],
          // scale: [1, 1, 1],
        }}
        //___What "rotationX" does? Why is separated from other groupProps?
        //___This props is designe to work in some useGesture animation;
        // rotationX={Math.PI * 0.1}
        // rotationX={0}
      />

      <ScrollBaner
        groupProps={{
          name: 'GroupForLogoInFrame2',
          position: [0, -0.69, -0.3],
          scale: [0.6, 0.6, 0.6],
          // position: [0, 0, 0],
          // scale: [1, 1, 1],
        }}
        // rotationX={Math.PI * 0.05}
        // rotationX={0}
      />
    </a.group>
  );
};

export default FramedObjects;
