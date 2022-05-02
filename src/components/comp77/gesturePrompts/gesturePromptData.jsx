import { springConfigs } from '../../../data/reactSpring';

//______________________________<ContainerIntro>_____________________

const introGesturePromptData = {
  transitionConfig: {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    delay: 200,
    config: springConfigs.molasses,
  },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: {
    from: { y: ' -110%' },
    to: { y: '110 %' },
    config: { duration: 5000 },
  },
  /*
  for <GesturePromptTP> layout
  */
  highFactor: 0.15,
  widthFactor: 0.35,
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
  transitionConfig: {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    delay: 200,
    config: springConfigs.molasses,
  },
  /*
  for <GesturePromptTP> => <GraphicComponentOf...>
  */
  springConfig: {
    from: { x: ' -110%' },
    to: { x: '110 %' },
    config: { duration: 5000 },
  },
  /*
  for <GesturePromptTurboParent> layout / class: gesture-prompt-turbo-parent__prompt-wrapper
  */
  classPromptWrapperCSS: {
    highFactor: 0.15,
    widthFactor: 0.3,
    flexDirection: 'column-reverse',
  },
  classTextWrapperCSS: { flex: 2 },
  classGraphicWrapperCSS: { flex: 1, display: 'flex', alignItems: 'center' },
  /*
  for <TextComponentOfGPTP>
  */
  textComponentData: {
    text: [
      { id: 'word1', wordPl: 'przeciągnij,', wordEn: 'grag' },
      { id: 'word2', wordPl: 'aby obrócić', wordEn: 'to rotate' },
      { id: 'word3', wordPl: 'bilboard', wordEn: 'bilboard' },
    ],
    classWrapperCSS: { alignItems: 'flex-start' },
  },
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

export { introGesturePromptData, spinningBoxGesturePromptData };
