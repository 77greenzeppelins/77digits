/*
doesn't work
*/
const backToCanvas = (
  sectionName,
  isOrbitControlEnabled,
  isInitialSectionContainerScrollable
) => {
  switch (sectionName) {
    case 'initialSection':
      if (
        isOrbitControlEnabled === true ||
        isInitialSectionContainerScrollable === false
      ) {
        isOrbitControlEnabled = false;
        isInitialSectionContainerScrollable = true;
      }
      break;
    default:
      console.log('PageCookies / onClick / switch');
  }
};
export { backToCanvas };
