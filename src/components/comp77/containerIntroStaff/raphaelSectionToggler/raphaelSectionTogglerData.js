const layoutData = {
  widthFactor: 0.0567,
  heightFactor: 0.0875,
};

const useTransitionConfig = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  config: { duration: 100 },
};

const useTransitionConfigButtons = {
  from: { springValue: 0 },
  enter: { springValue: 1 },
  leave: { springValue: 0 },
  config: { duration: 2200 },
};

export { layoutData, useTransitionConfig, useTransitionConfigButtons };
