import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import DialogCloud from '../../../../../../../_glbComponents/dialogCloud/DialogCloud';
/*
Basic Data
*/
import { bilboardSide4Data } from '../bilboardSide_4_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide4 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide4Data.digitsSideProps.canvasProps.meshProps}
        format={bilboardSide4Data.digitsSideProps.canvasProps.format}
        image={bilboardSide4Data.digitsSideProps.canvasProps.image}
      />
      <DreiText
        textConfig={bilboardSide4Data.digitsSideProps.textConfigHeader}
      />
      {/* {bilboardSide4Data.digitsSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))} */}
      <group
        scale={0.95}
        position={[-0.035, -0.1, -0.065]}
        rotation={[-0.03 * Math.PI, -0.05 * Math.PI, 0]}
      >
        <DialogCloud
          meshProps={{
            scale: [0.65, 0.5, 0.45],
            // rotation: [0.45 * Math.PI, 0, 0.15 * Math.PI],
            // position: [0, -0.1, -0.15],
            rotation: [0.5 * Math.PI, 0, 0],
            position: [0, 0, 0],
          }}
        />

        {bilboardSide4Data.digitsSideProps.paragraphs.map((paragraph, i) => (
          <DreiText key={i} textConfig={paragraph.textConfig} />
        ))}
      </group>
    </>
  );
};

export default DigitSide4;
