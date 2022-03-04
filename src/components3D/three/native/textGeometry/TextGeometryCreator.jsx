/*
_____1.
...FontLoader - Class for loading a font in JSON format; here blob format is used...
*/

import React, { useEffect, useMemo, useRef } from 'react';
// import * as THREE from 'three';
import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import jostUrl from '../../../../assets/fonts/sansSerif/jost.blob';
//_____
extend({ TextGeometry });

const TextGeometryCreator = React.forwardRef(
  ({ text, geometryParams }, ref) => {
    /*
  _____props: 'text' is a text itself 
  */
    //_____References
    //   const textGeometry = useRef();
    //   const pointsRef = useRef();

    //_____Default TextGeometry parameters
    const parameters = {
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2,
      bevelOffset: 0,
      bevelSegments: 5,
    };
    //_____
    const finalParams = geometryParams ? geometryParams : parameters;
    //_____
    const font = useLoader(FontLoader, jostUrl);
    const [geometryFromText, positionsFromText] = useMemo(() => {
      const geometryFromText = new TextGeometry(text, {
        font: font,
        ...finalParams,
      });
      geometryFromText.center();
      const positionsFromText = geometryFromText.attributes.position.array;
      return [geometryFromText, positionsFromText];
    }, [font, text]);

    //_____
    useEffect(() => {
      console.log(
        '<TextGeometryCreator> / geometryFromText:',
        geometryFromText
      );
    }, [geometryFromText]);

    // return geometryFromText;
    // return null;

    return (
      <>
        <bufferGeometry>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={positionsFromText}
            count={positionsFromText.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
      </>
    );

    // return (
    //   <mesh {...meshProps} geometry={geometryFromText}>
    //     <meshPhysicalMaterial
    //       thickness={100}
    //       transmission={1}
    //       roughness={0.25}
    //       clearcoat={1}
    //       clearcoatRoughness={0}
    //       envMapIntensity={5}
    //     />
    //   </mesh>
    // );
  }
);

export default TextGeometryCreator;

/*
  <textGeometry ref={textGeometry} args={[text, parameters]} /> 
  <meshBasicMaterial color={[1, 1, 1]} />
  <meshPhysicalMaterial
        thickness={100}
        transmission={1}
        roughness={0.25}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={5}
      />
*/

/*

  //   const geometryFromText = new TextGeometry('TAK', {
  //     font: font,
  //     size: 80,
  //     height: 5,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelOffset: 0,
  //     bevelSegments: 5,
  //   });

  //   const parameters = useMemo(
  //     () => ({
  //       font,
  //       size: 50,
  //       height: 5,
  //       curveSegments: 12,
  //       bevelEnabled: true,
  //       bevelThickness: 4,
  //       bevelSize: 1.5,
  //       bevelOffset: 0,
  //       bevelSegments: 8,
  //     }),
  //     [font]
  //   );
*/

/*
//   return (
  //     <mesh ref={pointsRef} {...meshProps}>
  //       <bufferGeometry>
  //         <bufferAttribute
  //           attachObject={['attributes', 'position']}
  //           array={positionsFromText}
  //           count={positionsFromText.length / 3}
  //           itemSize={3}
  //         />
  //       </bufferGeometry>
  //       <pointsMaterial />
  //     </mesh>
  //   );

  //   return (
  //     <points ref={pointsRef} {...meshProps}>
  //       <bufferGeometry>
  //         <bufferAttribute
  //           attachObject={['attributes', 'position']}
  //           array={positionsFromText}
  //           count={positionsFromText.length / 3}
  //           itemSize={3}
  //         />
  //       </bufferGeometry>
  //       <pointsMaterial size={0.01} />
  //     </points>
  //   );

  //   return (
  //     <line ref={pointsRef} {...meshProps}>
  //       <bufferGeometry>
  //         <bufferAttribute
  //           attachObject={['attributes', 'position']}
  //           array={positionsFromText}
  //           count={positionsFromText.length / 3}
  //           itemSize={3}
  //         />
  //       </bufferGeometry>
  //       <lineBasicMaterial color={[0x0000ff]} />
  //     </line>
  //   );
*/
