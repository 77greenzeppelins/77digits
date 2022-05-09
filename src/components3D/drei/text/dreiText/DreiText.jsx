import React from 'react';
import { Text } from '@react-three/drei';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Hooks
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Resources
*/
import jost from '../../../../assets/fonts/sansSerif/Jost-400-Book.ttf';
import garamont from '../../../../assets/fonts/sansSerif/EBGaramond-Regular.woff';

/*
-----------------------------------------------------------------------------
*/
const DreiText = React.memo(({ textConfig }) => {
  /*
    Global State Section
    canvasState={languageVersion,...}
    */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
    Hook Section
    */
  const windowSize = useWindowSize();
  /*
  ...
  */
  // useEffect(() => {
  //   // console.log('DreiText / typeof textConfig ', typeof textConfig);
  //   console.log('DreiText / textConfig ', textConfig.text[0]);
  // }, [textConfig]);
  const prepareTextProps = () => {
    /*
    if (textProps for Pl version !== textProps for En version )
    */
    if (textConfig.textProps.length === 2) {
      // console.log('textConfig.textProps is an array');
      if (canvasGlobalState.languageVersion) {
        return { ...textConfig.textProps[1] };
      } else {
        return { ...textConfig.textProps[0] };
      }
    } else {
      // console.log('textConfig.textProps is an object');
      return { ...textConfig.textProps };
    }
  };

  // const prepareLineHeight = () => {
  //   if (textConfig.lineHeight.length === 2) {
  //     // console.log('textConfig.textProps is an array');
  //     if (windowSize.height > 800) {
  //       return { ...textConfig.lineHeight[0] }; //mobile
  //     } else {
  //       return { ...textConfig.lineHeight[1] }; //no-Mobile
  //     }
  //   } else {
  //     // console.log('textConfig.textProps is an object');
  //     return { ...textConfig.lineHeight };
  //   }
  // };

  /*
  JSX
  */
  return (
    <Text
      /*
      "textProps" encompasses basic "3D Object" properties like "position", "scale" etc;
      */
      // position={[-0.5, 0, 0]}
      // {...textConfig.textProps}
      {...prepareTextProps()}
      font={textConfig.font === 'garamont' ? garamont : jost}
      fontSize={
        windowSize.width < 300
          ? textConfig.fontSize[0]
          : windowSize.width < 600
          ? textConfig.fontSize[1]
          : textConfig.fontSize[2]
      }
      letterSpacing={textConfig.letterSpacing || 0.01}
      // lineHeight={prepareLineHeight()}
      lineHeight={textConfig.lineHeight || 1.5}
      whiteSpace={textConfig.whiteSpace || 'normal'} //nowrap
      maxWidth={
        /*
        "textConfig.maxWidthValue" is "fixedValue" 
        */
        textConfig.maxWidthValue
          ? textConfig.maxWidthValue
          : windowSize.width < 300
          ? textConfig.maxWidth[0]
          : windowSize.width < 600
          ? textConfig.maxWidth[1]
          : textConfig.maxWidth[2]
      }
      textAlign={textConfig.textAlign || 'left'} //"justify", "right", "center"
      overflowWrap={textConfig.overflowWrap || 'normal'} // "break-word"
      direction="rtr" //"ltr" or "rtl"
      // anchorY="95%" //'top', 'top-baseline', 'top-cap', 'top-ex', 'middle', 'bottom-baseline', or 'bottom'
      /*
      To experiment with font "micro-sizes"; useful in case of "jost"
      Value of "strokeWidth" might be "0.0005" and font is more "fit"
      */
      strokeWidth={textConfig.strokeWidth || 0}
      strokeColor={textConfig.strokeColor || 0x000000}
    >
      {canvasGlobalState.languageVersion
        ? textConfig.text[1]
        : textConfig.text[0]}
    </Text>
  );
});

export default DreiText;
