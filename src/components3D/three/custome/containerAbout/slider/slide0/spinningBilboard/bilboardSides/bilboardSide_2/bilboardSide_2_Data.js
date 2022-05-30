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
  bilboardSideProps,
} from '../bilboarSidesCommonData';

/*
------------------------------------------------------------------------------
*/
const bilboardSide2Data = {
  /* -----Panel Left / TECH & POSZUKUJĘ ------------------------------  */

  /*
  for <SpinningBoxSide>'s general layout
  */
  sideProps: bilboardSideProps[1],
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
  clientSideProps: {
    /*
    for label's <UniversalFrame>
    */
    canvasProps: {
      format: 'verticalFormat',
      image: tech,
    },
    /*
    for <DreiText>
    */
    textConfigHeader: {
      text: ["Imagine you're", 'Może jesteś'],
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
  digitsSideProps: {
    canvasProps: {
      format: 'verticalFormat',
      image: blank,
      meshProps: { rotation: [0, Math.PI, 0] },
    },
    textConfigHeader: {
      ...mHeaderConfig,
      textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
      text: ['I hunt for', 'Poszukuję'],
    },
  },
};
export { bilboardSide2Data };
