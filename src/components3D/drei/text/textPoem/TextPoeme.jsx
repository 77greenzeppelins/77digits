/*
Hi-quality text rendering w/ signed distance fields (SDF) and antialiasing, using troika-3d-text. All of troikas props are valid!
*/

import React from 'react';
import { Text } from '@react-three/drei';

const TextPoeme = React.forwardRef(
  (
    {
      text,
      font,
      fontResponsiveness,
      whiteSpace,
      maxWidth,
      children,
      fillOpacity,
      strokeWidth,
      strokeColor,
    },
    ref
  ) => {
    return (
      <>
        <Text
          font={font}
          fontSize={fontResponsiveness}
          whiteSpace={whiteSpace}
          maxWidth={maxWidth}
          letterSpacing={0.12}
          //
          fillOpacity={fillOpacity}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
        >
          {children}
          {text}
        </Text>
      </>
    );
  }
);

export default TextPoeme;
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
  'textAlign',
  'textIndent',
  'whiteSpace',
  'material',
  'color',
  'colorRanges',
  'fillOpacity',
  'outlineOpacity',
  'outlineColor',
  'outlineWidth',
  'outlineOffsetX',
  'outlineOffsetY',
  'outlineBlur',
  'strokeColor',
  'strokeWidth',
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
