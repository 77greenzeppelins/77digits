import React from 'react';
import { Text } from '@react-three/drei';
/*
Basic Resources
*/
import jost from '../../../../assets/fonts/sansSerif/Jost-400-Book.ttf';
import garamont from '../../../../assets/fonts/sansSerif/EBGaramond-Regular.woff';

/*
------------------------------------------------------------------------------
*/
const TextVerse = React.forwardRef(
  (
    {
      text,
      font,
      textProps,
      fontResponsiveness,
      whiteSpace,
      textAlign,
      letterSpacing,
      lineHeight,
      strokeWidth,
      strokeColor,
      //
      maxWidth,
      anchorX,
    },
    ref
  ) => {
    /*
    JSX
    */
    return (
      <Text
        /*
        "textProps" embraces basic "3D Object" properties like "position" itp
        */
        {...textProps}
        font={(font === 'garamont' && garamont) || jost}
        fontSize={fontResponsiveness}
        whiteSpace={whiteSpace || 'normal'}
        letterSpacing={letterSpacing || 0.12}
        textAlign={textAlign}
        maxWidth={maxWidth}
        anchorX={anchorX}
        lineHeight={lineHeight || 1.2}
        /*
        To experiment with font "micro-sizes"
        value of "strokeWidth" might be "0.0005" and font is more "fit" 
        */
        strokeWidth={strokeWidth || 0}
        strokeColor={strokeColor || 0x000000}
      >
        {text}
      </Text>
    );
  }
);
export default TextVerse;

/*
  Derived Material props
*/
// const derivedMaterialProps = useMemo(() => {
//   return {
//     color: derivedMaterialPropsColor || [1, 1, 1],
//     clearcoat: 1.0,
//     clearcoatRoughness: 0,
//     metalness: 0.99,
//     roughness: 0.35,
//     transmission: 0.6,
//     transparent: true,
//   };
// }, [derivedMaterialPropsColor]);

/*
If you want to manipulate materials conditionally
*/
/* {thisMaterial || <meshBasicMaterial {...materialProps} />} */

/* {thisMaterial === true ? (
          <meshPhysicalMaterial attach="material" {...derivedMaterialProps} />
        ) : (
          <meshBasicMaterial {...materialProps} />
    )} */

//https://github.com/protectwise/troika/blob/master/packages/troika-3d-text/src/facade/Text3DFacade.js
/*
const TEXT_MESH_PROPS = [
  'text',
  'anchorX',
  'anchorY',
  'font',
  'fontSize',
  'letterSpacing',
  'lineHeight',
  'maxWidth',
  'overflowWrap',
  'direction',
  'textAlign', <'left', 'right', 'center', or 'justify'>
  'textIndent',
  'whiteSpace',
  'material',
  'color',
  'colorRanges',
  //_____czcionka konturowa
  'fillOpacity',
  'strokeColor',
  'strokeWidth',
  //
  'outlineOpacity',
  'outlineColor',
  'outlineWidth',
  'outlineOffsetX',
  'outlineOffsetY',
  'outlineBlur',
  'strokeOpacity',
  'curveRadius',
  'depthOffset',
  'clipRect',
  'orientation',
  'glyphGeometryDetail',
  'sdfGlyphSize',
  'debugSDF'
]

 */
