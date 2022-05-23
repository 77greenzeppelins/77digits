/*
Assets
*/
import music from '../../../../../../../../../assets/textures/containerAbout_Slide0_music_4_445_800.webp';
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
const bilboardSide3Data =
  /* -----Panel Back / MUSIC & BUDUJĘ POŁĄCZENIA---------------------------*/
  {
    sideProps: { position: [0, 0, -0.455], rotation: [0, Math.PI, 0] },
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
        image: music,
      },
      /*
      in case we want some <UniqueObject> component
      */
      uniqueObjectName: 'musicNote',
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
              'an author of outstanding pieces of music...',
              'twórczynią/ twórcą wybitnych dzieł muzycznych...',
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
        text: ['I build', 'Buduję'],
      },
      paragraphs: [
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [
                { position: [0, 0.15, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.15, -0.01], rotation: [0, Math.PI, 0] },
              ],
              // EN: mobile / no-mobile
              [
                { position: [0, 0.15, -0.01], rotation: [0, Math.PI, 0] },
                { position: [0, 0.15, -0.01], rotation: [0, Math.PI, 0] },
              ],
            ],
            text: [
              'subtle connections between technology  ',
              'subtelne połączenia powiędzy technologią',
            ],
            ...mParagraphConfig,
          },
        },
        {
          textConfig: {
            textProps: [
              // PL: mobile / no-mobile
              [
                { position: [-0.2, -0.596, -0.01], rotation: [0, Math.PI, 0] },
                { position: [-0.2, -0.596, -0.01], rotation: [0, Math.PI, 0] },
              ],
              // EN: mobile / no-mobile
              [
                { position: [-0.2, -0.596, -0.01], rotation: [0, Math.PI, 0] },
                { position: [-0.2, -0.596, -0.01], rotation: [0, Math.PI, 0] },
              ],
            ],
            text: ['art...  ', 'sztuką...'],
            ...mParagraphConfig,
          },
        },
      ],
      canvasProps: {
        format: 'verticalFormat',
        image: blank,
        meshProps: { rotation: [0, Math.PI, 0] },
      },
      /*
      in case we want some <UniqueObject> component
      */
      uniqueObjectName: 'circledPath',
    },
  };
export { bilboardSide3Data };
