/*
 Basic Data
 */
import { globalPositionData } from '../../../../../../data/globalData';
/*
----------------------------------------------------------------------------
*/

const interactivePanelData = {
  position: [
    0,
    0,
    /*
    to cover the whole screen, this plane should be positioned very close to camera; value 0.9 makes it "invisible"; for test purpose smaller values should be used;
    */
    globalPositionData.aboutContainerCameraPosition[2] * 0.89,
  ],
  planeGeometryArgs: [0.3, 0.3],
  numberOfSlides: 2,
};

const slide1Content = {
  slidePart_1: { header: 'Kimkolwiek jesteś', mainText: '' },
  slidePart_2: { header: '', mainText: '' },
};

export { interactivePanelData, slide1Content };
