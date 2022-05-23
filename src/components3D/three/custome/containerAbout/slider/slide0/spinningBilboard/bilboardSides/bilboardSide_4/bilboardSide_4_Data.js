/*
Assets
*/
import medicine from '../../../../../../../../../assets/textures/containerAbout_Slide0_medicine_2_445_800.webp';
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
const bilboardSide4Data =
  /* -----Panel Right / MEDICINE & 77 essence-------------------------------  */
  {
    sideProps: { position: [0.455, 0, 0], rotation: [0, Math.PI * 0.5, 0] },
    /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
    frameProps: {
      ...frameConfig,
    },
    /*
    for <SpinningBoxSide>'s <SideLabel>
    */
    labelProps: {
      /*
      for label's <UniversalFrame>
      */
      canvasProps: {
        format: 'verticalFormat',
        image: medicine,
      },
      /*
      in case we want some <UniqueObject> component
      */
      uniqueObjectName: 'medicineDetail',
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
              'an great hope of medicin....  ',
              'długo oczekiwaną nadzieją branży medycznej...',
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
      canvasProps: {
        format: 'verticalFormat',
        image: blank,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      /*
      in case we want some <UniqueObject> component
      */
      uniqueObjectName: 'braveClient',

      textConfigHeader: {
        ...mHeaderConfig,
        textProps: { position: [0, 0.4, -0.01], rotation: [0, Math.PI, 0] },
        text: ['I create', 'Tworzę'],
      },

      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
              // EN: mobile / no-mobile
              [
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
              ],
            ],
            text: [
              'web applications only for demanding clients....  ',
              'aplikacje internetowe wyłacznie dla odważnych Klientów...',
            ],
            ...mParagraphConfig,
          },
        },
      ],
    },
  };
export { bilboardSide4Data };
