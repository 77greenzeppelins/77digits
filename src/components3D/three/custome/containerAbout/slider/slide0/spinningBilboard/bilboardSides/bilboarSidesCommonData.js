/*
...
*/
const frameConfig = {
  format: 'verticalFormat',
  cylinderFi: 0.015,
  sphereRadious: 0.03,
};
/*
Some Basic Data
*/
const mF = 0.25;
const sF = 0.6;
const xlFontHeader = [0.16, 0.18, 0.19];
const mFontHeader = [0.16 * sF, 0.18 * sF, 0.19 * sF];
const mFontParagraph = [0.16 * mF, 0.18 * mF, 0.19 * mF];

const xlHeaderConfig = {
  font: 'garamont',
  fontSize: xlFontHeader,
  letterSpacing: 0.1,
  maxWidthValue: 0.5,
  lineHeight: 1.2,
};

const mHeaderConfig = {
  textProps: { position: [0.06, 0.4, 0.01] },
  font: 'garamont',
  fontSize: mFontHeader,
  letterSpacing: 0.3,
  maxWidthValue: 0.7,
  lineHeight: 1.2,
};
const mParagraphConfig = {
  font: 'jost',
  fontSize: mFontParagraph,
  letterSpacing: 0.14,
  maxWidthValue: 0.6,
  lineHeight: 1.3,
  strokeWidth: 0.00001,
};

export { frameConfig, xlHeaderConfig, mHeaderConfig, mParagraphConfig };
