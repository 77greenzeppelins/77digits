/*
Data for all "gestures" used in App
*/
// import { springConfigs } from '../../../data/reactSpring';

//_______________________________COMMON_____________________________
const useTransitionConfig = {
  from: { opacity: 0, display: 'none' },
  enter: { opacity: 1, display: 'flex' },
  leave: { opacity: 0, display: 'none' },
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
/*
for <SpinningBoxGesturePrompt>
*/
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
  classGraphicWrapperCSS: {
    flexDirection: 'row',
  },
  /*
  for <GraphicComponentOfGPTP>
  */
  graphicComponentData: {
    height: '1px',
    width: '60%',
  },
};

/*
for <SlideGesturePrompt>
*/
const slideGesturePrompt = {
  transitionConfig: { ...useTransitionConfig },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: { ...useSpringConfigVertical },

  /*
  CSS configs for <GesturePromptsTurboParent>'s classes: .container-outher, .prompt-wrapper, .graphic-wrapper, ...
  */
  classContainerOutherCSS: {
    top: 0,
  },
  classPromptWrapperCSS: {
    highFactor: 0.14,
    left: 0,
    top: 0,
  },
  // classGraphicWrapperCSS: {
  //   flexDirection: 'column',
  // },
  /*
  CSS configs for <GraphicComponentOFGPTP>
  */
  graphicComponentData: {
    height: '60%',
    width: '1px',
  },
};

export {
  introGesturePromptData,
  spinningBoxGesturePromptData,
  slideGesturePrompt,
};
