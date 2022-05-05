/*
Data for all gestures used in App
*/

import { springConfigs } from '../../../data/reactSpring';

//_______________________________COMMON_____________________________
const useTransitionConfig = {
  from: { opacity: 0, display: 'none' },
  enter: { opacity: 1, display: 'flex' },
  leave: { opacity: 0, display: 'none' },
  delay: 200,
  config: springConfigs.molasses,
};
const useSpringConfigVertical = {
  from: { y: ' -110%', opacity: 0 },
  to: { y: '110 %', opacity: 1 },
  config: { duration: 5000 },
};
const useSpringConfigHorizontal = {
  from: { x: ' -110%', opacity: 0 },
  to: { x: '110 %', opacity: 1 },
  config: { duration: 5000 },
};

//______________________________<ContainerIntro>_____________________

const introGesturePromptData = {
  transitionConfig: { ...useTransitionConfig },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: { ...useSpringConfigVertical },
  /*
  for <GesturePromptTP> layout
  */
  // highFactor: 0.15,
  // widthFactor: 0.35,
  /*
  CSS
  */
  classPromptWrapperCSS: { highFactor: 0.15, widthFactor: 0.35 },
  /*
  for <TextComponentOf...>
  */
  textComponentData: {
    text: [
      { id: 'word1', wordPl: 'przewiń', wordEn: 'scroll' },
      { id: 'word2', wordPl: 'zawartość', wordEn: 'or' },
      { id: 'word3', wordPl: 'ekranu', wordEn: 'drag' },
    ],
  },
};

//______________________________<ContainerAbout>_____________________
const spinningBoxGesturePromptData = {
  transitionConfig: { ...useTransitionConfig },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: { ...useSpringConfigHorizontal },
  /*
  for <GesturePromptTurboParent> layout / class: gesture-prompt-turbo-parent__prompt-wrapper
  */
  classPromptWrapperCSS: {
    highFactor: 0.15,
    widthFactor: 0.3,
  },
  classGraphicWrapperCSS: { flex: 1, display: 'flex', alignItems: 'center' },
  /*
  for <GraphicComponentOfGPTP>
  */
  graphicComponentData: {
    classHolderCSS: {
      height: '1px',
      width: '100%',
      marginLeft: 0,
    },
    classLineCSS: {},
  },
};

const SlideGesturePrompt = {
  transitionConfig: { ...useTransitionConfig },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: { ...useSpringConfigVertical },
  /*
  for <GesturePromptTP> layout
  */
  // highFactor: 0.15,
  // widthFactor: 0.35,
  /*
  CSS
  */
  classPromptWrapperCSS: { highFactor: 0.1, widthFactor: 0.35 },
  graphicComponentData: {
    classHolderCSS: {
      height: '90%',
      width: '1px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    classLineCSS: {
      height: '90%',
    },
  },
};

export {
  introGesturePromptData,
  spinningBoxGesturePromptData,
  SlideGesturePrompt,
};
