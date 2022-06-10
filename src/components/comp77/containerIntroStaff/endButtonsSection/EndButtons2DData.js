const useTransitionConfig = {
  from: { opacity: 0, pointerEvents: 'none' },
  enter: { opacity: 1, pointerEvents: 'none' },
  leave: { opacity: 0, pointerEvents: 'none' },
  config: { duration: 100 },
};
const instContactButton = {
  width: 0.24,
  height: 0.35,
};

export { useTransitionConfig, instContactButton };
