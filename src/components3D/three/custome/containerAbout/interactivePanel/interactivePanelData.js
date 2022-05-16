/*
 Basic Data
 */
import {
  globalPositionData,
  contAboutSlidesNumber,
} from '../../../../../data/globalData';

const interactivePanelData = {
  /*
  "position.z" matters! to cover the whole sreen,  this plane should be positioned very close to camera; value 0.9 makes it "invisible"; for test purpose smaller values should be used;
  */
  position: [0, 0, globalPositionData.aboutContainerCameraPosition[2] * 0.9],
  planeGeometryArgs: [0.3, 0.3],
  numberOfSlides: contAboutSlidesNumber,
};

export { interactivePanelData };
