import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
// import UniversalCanvasWithoutMap from '../../matcapFrames/UniversalCanvasWithoutMap';
import TextVerse from '../../../../drei/text/textVerse/TextVerse';
/*
BasicData
*/
const text = 'synergia';
const [fontSmall, fontMedium, fontLarge] = [
  /*
  font sizes
  */ 0.1, 0.12, 0.13,
];
/*
-----------------------------------------------------------------------------
*/
const Banner = ({ groupProps, backgroundColor }) => {
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();

  /*
  JSX
  */
  return (
    <group {...groupProps}>
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        banner={true}
      />
      {/* <UniversalCanvasWithoutMap banner={true} /> */}

      {/*------Text*/}
      <TextVerse
        textProps={{
          position: [0, 0, 0],
          name: 'Text_ScrollOrDragToExplore',
        }}
        text={text}
        fontResponsiveness={
          viewport.width < 3.0
            ? fontSmall
            : viewport.width < 5.5
            ? fontMedium
            : fontLarge
        }
        letterSpacing={0.15}
        whiteSpace="nowrap" //'normal' "nowrap"
        maxWidth={viewport.width / 9}
      />
    </group>
  );
};

export default Banner;
