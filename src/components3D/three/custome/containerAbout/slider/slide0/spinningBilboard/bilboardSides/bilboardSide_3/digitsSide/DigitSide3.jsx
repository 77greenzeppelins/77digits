import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import CircledPath from './uniqueObject/CircledPath';
import ImageAsFlag from '../../../../../../../imageAsFlag/ImageAsFlag';
/*
Global State Staff
*/
import { canvasState } from '../../../../../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Basic Data
*/
import { bilboardSide3Data } from '../bilboardSide_3_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide3 = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  ...
  */
  const uTimeCondition =
    canvasGlobalState.currentContainer === 'aboutContainer' &&
    canvasGlobalState.containerAboutVisibleSlideIndex === 0;
  /*
  JSX
  */
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide3Data.digitsSideProps.canvasProps.meshProps}
        format={bilboardSide3Data.digitsSideProps.canvasProps.format}
        image={bilboardSide3Data.digitsSideProps.canvasProps.image}
      />
      {/*
      -----Each side has "header text"
      */}
      <DreiText
        textConfig={bilboardSide3Data.digitsSideProps.textConfigHeader}
      />
      {/*
      -----Some side has "paragraph text"
      */}
      {bilboardSide3Data.digitsSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
      {/*
      -----UniqueObject Section
      */}
      <CircledPath />

      <ImageAsFlag
        uAlpha={0.5}
        uTimeCondition={uTimeCondition}
        meshProps={{
          scale: 0.25,
          rotation: [0, Math.PI, 0],
          position: [0.15, -0.15, -0.02],
        }}
        geometryArgs={[1, 1, 16, 16]}
      />
    </>
  );
};

export default DigitSide3;
