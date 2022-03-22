import React from 'react';
/*
Components
*/
import VenusInFrame from './venus/VenusInFrame';
import ScrollBanner from './scrollBanner/ScrollBanner';
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
  });

  return (
    <a.group {...groupProps} rotation={rotateWithMouseMove}>
      <VenusInFrame
        groupProps={{
          name: 'GroupForLogoInFrame',
          position: [0, 0.03, 0.4],
          scale: [0.8, 0.8, 0.8],
        }}
      />

      <ScrollBanner
        groupProps={{
          name: 'GroupForLogoInFrame2',
          position: [0, -0.69, -0.3],
          scale: [0.6, 0.6, 0.6],
        }}
      />
    </a.group>
  );
};

export default FramedObjects;
