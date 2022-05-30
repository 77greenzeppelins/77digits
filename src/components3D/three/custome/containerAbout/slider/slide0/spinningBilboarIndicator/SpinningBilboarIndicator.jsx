import React, { useRef, useEffect } from 'react';
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
const SpinningBilboarIndicator = ({ springValue }) => {
  /*
  Refderences
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
            scale={i === 4 ? 1 : springValue[i]}
            rotation-z={i === 4 ? springValue[i] : 0}
          >
            <a.mesh>
              <planeGeometry args={[0.5, 0.5, 1, 1]} />
              <meshBasicMaterial
                // color={[1, 1, 1]}
                color={[0, 0, 0]}
              />
            </a.mesh>

            <Html
              transform // If true, applies matrix3d transformations (default=false)
              // occlude
            >
              <div
                style={{
                  width: '33px',
                  height: '23px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  // backgroundColor: 'red',
                  // opacity: 0.5,
                }}
              >
                <p style={{ color: 'white', fontSize: '0.7rem' }}> {number} </p>
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
  useEffect(() => {
    console.log('group.current', group.current);
  }, []);
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
