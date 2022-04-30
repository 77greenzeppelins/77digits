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
  //   promptWrapperStyle: { flexDirection: 'column' },
  /*
  for <TextComponentOf...>
  */
  textComponentData: [
    { id: 'word1', wordPl: 'przewiń', wordEn: 'scroll' },
    { id: 'word2', wordPl: 'zawartość', wordEn: 'or' },
    { id: 'word3', wordPl: 'ekranu', wordEn: 'drag' },
  ],
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
  for <TextComponentOf...>
  */
  textComponentData: [
    { id: 'word1', wordPl: 'przewiń', wordEn: 'scroll' },
    { id: 'word2', wordPl: 'zawartość', wordEn: 'or' },
    { id: 'word3', wordPl: 'ekranu', wordEn: 'drag' },
  ],
};

export { introGesturePromptData, spinningBoxGesturePromptData };
