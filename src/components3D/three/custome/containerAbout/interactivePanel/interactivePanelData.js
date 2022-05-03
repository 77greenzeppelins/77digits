/*
 Basic Data
 */
import { globalPositionData } from '../../../../../data/globalData';

const interactivePanelData = {
  position: [
    0,
    0,
    /*
    to cover the whole sreen,  this plane should be positioned very close to camera; value 0.9 makes it "invisible"; for test purpose smaller values should be used;
    */
    globalPositionData.aboutContainerCameraPosition[2] * 0.9,
  ],
  planeGeometryArgs: [0.3, 0.3],
  numberOfSlides: 2,
};

export { interactivePanelData };
