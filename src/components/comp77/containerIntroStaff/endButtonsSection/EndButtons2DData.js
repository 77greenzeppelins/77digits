const useTransitionConfig = {
  from: { opacity: 0, pointerEvents: 'none' },
  enter: { opacity: 1, pointerEvents: 'auto' },
  leave: { opacity: 0, pointerEvents: 'none' },
  config: { duration: 100 },
};
const instContactButton = {
  width: 0.27,
  height: 0.35,
};
const resetButton = {
  width: 0.1,
  height: 0.22,
};
const auxiliaryButton = {
  width: 0.0567,
  height: 0.0875,
};

export { useTransitionConfig, instContactButton, resetButton, auxiliaryButton };
