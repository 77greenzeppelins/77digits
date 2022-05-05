import { springConfigs } from '../../../../data/reactSpring';
import { contAboutSlidesNumber } from '../../../../data/globalData';

const slidesNumber = contAboutSlidesNumber;

const useTransitionConfig = {
  from: { opacity: 0, display: 'none', scale: 1 },
  enter: { opacity: 1, display: 'flex', scale: 1 },
  leave: { opacity: 0, display: 'none', scale: 1 },
  config: springConfigs.molasses,
};
const slideDelay = { enter: 400, leave: 100 };

export { slidesNumber, useTransitionConfig, slideDelay };
