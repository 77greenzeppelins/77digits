import React from 'react';
import {
  gesturePromtBasicData,
  caDragSpinningBox,
  caDragSpinningBoxArray,
} from './gesturePromptData';
/*
Spring Section
*/
import { a, useSpring, useSprings } from '@react-spring/three';
/*
Basic Data
*/
let springConfig;
let springsArray;

/*
----------------------------------------------------------------------
*/
const GesturePrompt = ({ scena }) => {
  /*
  Logic for functionality
  Component is used in various places / containers to suggest some gestures; for instance "scroll", "drag",  "sweap" (?)
  */
  switch (scena) {
    case 'caDragSpinningBox':
      springConfig = caDragSpinningBox;
      springsArray = caDragSpinningBoxArray;
      break;
    default:
      console.log('.......');
      break;
  }

  /*
  Spring Staff
  */
  // let counter = useRef(0);
  const [spring] = useSpring(
    () => ({
      ...springConfig,
    }),
    []
  );

  const springs = useSprings(
    springsArray.length,
    springsArray.map(({ id, ...configObj }) => configObj)
  );
  /*
  JSX
  */
  return (
    // <a.mesh {...spring}>
    //   <circleGeometry
    //     //    args={[1, 4]}
    //     {...gesturePromtBasicData.circleGeometry}
    //   />
    //   <meshBasicMaterial />
    // </a.mesh>
    <>
      {springs.map((spring, index) => (
        <a.mesh key={caDragSpinningBoxArray[index].id} {...spring}>
          <circleGeometry
            //    args={[1, 4]}
            {...gesturePromtBasicData.circleGeometry}
          />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );
};

export default GesturePrompt;
/*
Constructor
CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
radius — Radius of the circle, default = 1.
segments — Number of segments (triangles), minimum = 3, default = 8.
thetaStart — Start angle for first segment, default = 0 (three o'clock position).
thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
*/
