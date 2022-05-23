/*
Assets
*/
import tech from '../../../../../../../../../assets/textures/containerAbout_Slide0_tech_3_445_800.webp';
import blank from '../../../../../../../../../assets/textures/containerAbout_Slide1_blank_verticalFormat_445_800..webp';
/*
Basic Data
*/
import {
  frameConfig,
  mHeaderConfig,
  mParagraphConfig,
} from '../bilboarSidesCommonData';

/*
------------------------------------------------------------------------------
*/
const bilboardSide2Data = {
  /* -----Panel Left / TECH & POSZUKUJĘ ------------------------------  */

  /*
    for <SpinningBoxSide>'s general layout
    */
  sideProps: { position: [-0.455, 0, -0], rotation: [0, -0.5 * Math.PI, 0] },
  /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
  frameProps: {
    groupProps: { name: 'groupForPanelFront' },
    ...frameConfig,
  },
  /*
    for "Client Side"
    */
  labelProps: {
    /*
      for label's <UniversalFrame>
      */
    canvasProps: {
      format: 'verticalFormat',
      image: tech,
    },
    /*
      in case we want some <UniqueObject> component
      */
    uniqueObjectName: 'techPanel',
    /*
      for <DreiText>
      */
    textConfigHeader: {
      text: ["Imagine you're", 'MOŻE JESTEŚ'],
      ...mHeaderConfig,
    },
    paragraphs: [
      {
        textConfig: {
          textProps: [
            // PL: mobile / no-mobile
            [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
            // EN: mobile / no-mobile
            [{ position: [0, 0.1, 0.01] }, { position: [0, 0.1, 0.01] }],
          ],
          text: [
            'producer of unique and advanced technical solution...',
            'producentem/ producentką unikalnych rozwiązań technicznych...',
          ],
          ...mParagraphConfig,
        },
      },
    ],
  },
  /*
    for "77digits Side"
    */
  labelPropsReverse: {
    textConfigHeader: {
      ...mHeaderConfig,
      textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
      text: ['I hunt for', 'Poszukuję'],
    },
    canvasProps: {
      format: 'verticalFormat',
      image: blank,
      meshProps: { rotation: [0, Math.PI, 0] },
    },
  },
};
export { bilboardSide2Data };
