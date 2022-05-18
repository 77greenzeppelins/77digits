/*
Data for all "gestures" used in App
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
  loop: true,
};
const useSpringConfigHorizontal = {
  from: { x: ' -110%', opacity: 0 },
  to: { x: '110 %', opacity: 1 },
  config: { duration: 5000 },
  loop: true,
};

//______________________________<ContainerIntro>_____________________

const introGesturePromptData = {
  transitionConfig: { ...useTransitionConfig },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: { ...useSpringConfigVertical },
  /*
  CSS configs for <GesturePromptsTurboParent>'s classes: .container-outher, .prompt-wrapper, .graphic-wrapper, ...
  */
  classContainerOutherCSS: {
    bottom: 0,
  },
  classPromptWrapperCSS: {
    highFactor: 0.2,
    left: 0,
    bottom: 0,
  },
  classGraphicWrapperCSS: {
    flexDirection: 'column',
  },
  /*
  CSS configs for <GraphicComponentOFGPTP>
  */
  graphicComponentData: {
    height: '60%',
    width: '1px',
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
  classContainerOutherCSS: {
    bottom: 0,
  },
  classPromptWrapperCSS: {
    widthFactor: 0.25,
    bottom: '7vh',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '1px',
    // backgroundColor: 'red',
  },
  /*
  for <GraphicComponentOfGPTP>
  */
  graphicComponentData: {
    height: '1px',
    width: '60%',
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
