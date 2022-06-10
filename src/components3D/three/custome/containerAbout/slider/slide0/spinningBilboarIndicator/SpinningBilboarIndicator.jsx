import React, { useRef } from 'react';
import { Html } from '@react-three/drei';
/*
Spring data
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import { indicatorCongif } from './spinningBilboarIndicatorData';

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboarIndicator = ({ indicatorGesture }) => {
  /*
  References
  */
  const group = useRef();

  /*
  JSX creator
  */
  const createJSX = () => {
    /*
    Just check...
    */
    if (!indicatorCongif) {
      return;
    }
    return (
      <group ref={group} scale={0.05} position={[0, -0.31, 0.05]}>
        {indicatorCongif.numbers.map(({ position, number }, i) => (
          <a.group
            key={i}
            position={position}
            scale={i === 4 ? 1 : indicatorGesture[i]}
            rotation-z={i === 4 ? indicatorGesture[i] : 0}
          >
            <Html
              transform // If true, applies matrix3d transformations (default=false)
            >
              <div className="contAbout-spinBilbInd__wrapper">
                <p className="contAbout-spinBilbInd__p"> {number} </p>
              </div>
            </Html>
          </a.group>
        ))}
      </group>
    );
  };
  /*
  ...
  */
  // useEffect(() => {
  //   console.log('springValues', springValues);
  //   console.log('group.current', group.current);
  // }, [springValues]);
  /*
  JSX
  */
  return createJSX();
};

export default SpinningBilboarIndicator;

//  SpinningBilboardIndicator;

/*
{indicatorCongif.glyphs.map(
          ({ glyphGroupProps, fontExtrudeSettings, text }, index) => (
            <a.group
              key={text}
              position={glyphGroupProps.position}
              rotation-z={index === 4 ? springValue[index] : 0}
              scale={index === 4 ? 1 : springValue[index]}
            >
              <CustomMeshWithMatcap>
                <TextGeometryFromFont
                  fontExtrudeSettings={fontExtrudeSettings}
                  text={text}
                />
              </CustomMeshWithMatcap>
            </a.group>
          )
)}
*/
