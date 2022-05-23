/*
Assets
*/
import family from '../../../../../../../../../assets/textures/containerAbout_Slide1_family_3.webp';
import manOnTheMoon from '../../../../../../../../../assets/textures/containerAbout_Slide0_moon_5_445_800.webp';
/*
Basic Data
*/
import { frameConfig, xlHeaderConfig } from '../bilboarSidesCommonData';

/*
------------------------------------------------------------------------------
*/
const bilboardSide1Data = {
  /*
    for <SpinningBoxSide>'s general layout
    */
  sideProps: { position: [0, 0, 0.455], rotation: [0, 0, 0] },
  /*
    for <SpinningBoxSide>'s <UniversalFrame>
    */
  frameProps: {
    groupProps: { name: 'groupForPanelFront' },
    ...frameConfig,
  },

  /*
  clientSideProps
  */
  clientSideProps: {
    /*
      for label's <UniversalFrame> or <UniversalFrameWithoutMap>
      */
    canvasProps: {
      format: 'verticalFormat',
      image: manOnTheMoon,
    },
    /*
      for  <DreiText>s
      */
    textConfigHeader: {
      textProps: [
        // PL: mobile / no-mobile
        [{ position: [-0.06, 0.25, 0.01] }, { position: [-0.06, 0.2, 0.01] }],
        // EN: mobile / no-mobile
        [{ position: [0, 0.2, 0.01] }, { position: [0, 0.34, 0.01] }],
      ],
      text: ["It's You", 'Jesteś Ty'],
      ...xlHeaderConfig,
      textAlign: 'right',
    },
  },

  /*
  digitsSideProps
  */
  digitsSideProps: {
    /*
      for label's <UniversalFrame> or <UniversalFrameWithoutMap>
      */
    canvasProps: {
      meshProps: { rotation: [0, Math.PI, 0] },
      format: 'verticalFormat',
      image: family,
    },

    /*
    for  <DreiText>s
    */
    textConfigHeader: {
      textProps: [
        // PL: mobile / no-mobile
        [
          { position: [0, 0.34, -0.01], rotation: [0, Math.PI, 0] },
          { position: [0, 0.34, -0.01], rotation: [0, Math.PI, 0] },
        ],
        // EN: mobile / no-mobile
        [
          { position: [0, 0.2, -0.01], rotation: [0, Math.PI, 0] },
          { position: [0, 0.1, -0.01], rotation: [0, Math.PI, 0] },
        ],
      ],
      font: 'garamont',
      text: ["It's me", 'Jestem Ja'],
      ...xlHeaderConfig,
      lineHeight: 1,
    },
  },
};

export { bilboardSide1Data };
