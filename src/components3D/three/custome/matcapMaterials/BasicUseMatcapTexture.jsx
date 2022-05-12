import React from 'react';
/*
 useMatcapTexture Staff
 */
import { useMatcapTexture } from '@react-three/drei';

/*
------------------------------------------------------------------------
*/
const BasicUseMatcapTexture = ({ textureIndex }) => {
  /*
  Textures switcher
  */
  switch (textureIndex) {
    case 1:
      textureIndex = '434240_D3D3CF_898784_A4A49F';
      break;
    case 2:
      textureIndex = '2A2A2A_DBDBDB_6A6A6A_949494';
      break;
    case 3:
      textureIndex = '2D2D2F_C6C2C5_727176_94949B';
      break;
    case 7:
      textureIndex = '1D2424_565F66_4E555A_646C6E'; //black, high-gloss, environment-map
      break;
    case 8:
      textureIndex = '300706_888576_822821_876E79'; //red-multicolor, high-gloss
      break;
    case 9:
      textureIndex = '3E2335_D36A1B_8E4A2E_2842A5'; //red-multicolor, high-gloss
      break;
    case 10:
      textureIndex = '3F3A2F_91D0A5_7D876A_94977B'; //lightBlue-multicolor, high-gloss
      break;
    default:
      textureIndex = '434240_D3D3CF_898784_A4A49F';
  }

  /*
  MatcapMaterial Section
 */
  const [matcapTexture] = useMatcapTexture(
    textureIndex,
    // '434240_D3D3CF_898784_A4A49F', //silver-like
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    1024
  );
  return <meshMatcapMaterial matcap={matcapTexture} />;
};

export default BasicUseMatcapTexture;

/*
Loads matcap textures from this repository: https://github.com/emmelleppi/matcaps

(It is a fork of this repository: https://github.com/nidorx/matcaps)

Note: useMatcapTexture hook is not meant to be used in production environments as it relies on third-party CDN.

*/

/*
const [matcapTexture] = useMatcapTexture(
    '434240_D3D3CF_898784_A4A49F', //DEFAULT: silver-like
    // '1D2424_565F66_4E555A_646C6E', //black, high-gloss, environment-map
    // '221917_928380_5F504D_7C746C', //brown marmur-like, nooo
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    // '2D2D2F_C6C2C5_727176_94949B', //grey, high-gloss, + navy accent !
    // '300706_888576_822821_876E79', //red-multicolor, high-gloss
    // '302721_CAC1BB_7A706A_91959B', //grey-brown, medium-gloss
    // '312C34_A2AAB3_61656A_808494', //grey-navy, medium-gloss + suble environment-map
    // '3E2335_D36A1B_8E4A2E_2842A5', //multicolor
    // '3F3A2F_91D0A5_7D876A_94977B', //multicolor
    // '3F4441_D1D7D6_888F87_A2ADA1', //grey, high-gloss,
    // '474843_CECEC4_898883_A3A3A4', //
    1024
  );

*/
