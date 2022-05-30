import React, { useEffect } from 'react';
import { Html } from '@react-three/drei';

/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
-----------------------------------------------------------
*/
const LastChapter = ({ positionY, opacity }) => {
  /*
  Gesture Section
  */
  //   useEffect(() => {
  //     console.log('display', display);
  //   }, [display]);

  const onClickHandler = (e, contact) => {
    e.preventDefault();

    window.location = 'tel:798-905-558';
  };

  /*
 JSX
 */
  return (
    <a.group
      position-z={-18.5}
      position-y={positionY}
      scale-x={opacity}
      scale-y={opacity}
    >
      <mesh>
        <planeGeometry args={[0.4, 0.4, 1, 1]} />
        <meshBasicMaterial color={[1, 0.5, 0.5]} />
      </mesh>
      <Html
        position-z={0}
        // position={[0, 0, 0]}
        rotation-x={0}
        transform // If true, applies matrix3d transformations (default=false)
        // occlude
      >
        <button
          onClick={onClickHandler}
          style={{
            width: '20px',
            height: '20px',
            // backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            // opacity: 0.2,
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: '0.2rem',
              weight: '100%',
              height: '100%',
            }}
          >
            ZADZWOŃ
          </p>
          {/* <a
            href="mailto:77greenzeppelins@gmail.com"
            
            style={{
              //   width: '100%',
              //   height: '100%',
              fontSize: '3rem',
              display: 'flex',
              justifyContent: 'center',
              lineHeight: 0.7,
            }}
          >
            <p style={{ opacity: 0 }}></p>
          </a> */}
        </button>
      </Html>
    </a.group>
  );
};

export default LastChapter;
