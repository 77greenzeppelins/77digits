import phoneImage from '../../../../../assets/textures/containerMenu_phone_1.png';
import emailImage from '../../../../../assets/textures/containerMenu_letter_3.png';
import { springConfigs } from '../../../../../data/reactSpring';

/*
------------------------------------------------------------------------
*/
const springConfig = {
  configBasic: springConfigs.configBasic,
  positionZStart: [0, 0, -20.64],
  positionZEnd: [0, 0, -18.64],
  positionYStart: [0, 0, 0],
  positionYEnd: [0, 2, 0],
  delay: 200,
};

const phoneButton = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [0, 0.2, 0] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: phoneImage, format: 'portrait' },
};

const emailButton = {
  groupProps: { scale: [0.335, 0.335, 0.335], position: [0, -0.2, 0] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: emailImage, format: 'portrait' },
};

const resetButtonFrame = {
  groupProps: { scale: [0.25, 0.25, 0.25], position: [0, 0, -0.5] },
  frameProps: { format: 'banner' },
  canvasProps: { image: emailImage, format: 'banner' },
};
const resetButtonTextSlide = {
  groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
  textProps: { position: [0, 0, 0] },
  font: 'garamont',
  fontSize: { fontSmall: 0.09, fontMiddle: 0.1, fontLarge: 0.15 },
  // whiteSpace: "nowrap",
  textLinePl: 'wielki reset',
  textLineEn: 'reset',
};

const auxiliaryTopButtonFrame = {
  groupProps: { scale: [0.17, 0.17, 0.17], position: [0.25, 0.31, -0.6] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: emailImage, format: 'portrait' },
};
const auxiliaryTopButtonTextSlide = {
  groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
  textProps: { position: [0, 0, 0] },
  fontSize: { fontSmall: 0.55, fontMiddle: 0.5, fontLarge: 0.55 },
  font: 'garamont',
  textLinePl: '?',
  textLineEn: '?',
};

const auxiliaryBottomButtonFrame = {
  groupProps: { scale: [0.17, 0.17, 0.17], position: [-0.25, -0.31, -0.6] },
  frameProps: { format: 'portrait' },
  canvasProps: { image: emailImage, format: 'portrait' },
};
const auxiliaryBottomButtonTextSlide = {
  groupProps: { scale: [1, 1, 1], position: [0, 0, 0] },
  textProps: { position: [0, 0, 0] },
  fontSize: { fontSmall: 0.55, fontMiddle: 0.5, fontLarge: 0.55 },
  font: 'garamont',
  textLinePl: '?',
  textLineEn: '?',
};

export {
  springConfig,
  phoneButton,
  emailButton,
  resetButtonFrame,
  resetButtonTextSlide,
  auxiliaryTopButtonFrame,
  auxiliaryTopButtonTextSlide,
  auxiliaryBottomButtonFrame,
  auxiliaryBottomButtonTextSlide,
};
