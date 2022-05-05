import { proxy } from 'valtio';

const canvasState = proxy({
  /*
  ------------------------------------------Universal Property
  ___currentContainer
  ...is changed within onClick events that allowe user to jump among containers;
  ...options: introContainer, aboutContainer, menuContainer;
  */
  currentContainer: 'none',
  // currentContainer: 'introContainer', // to switch off <InitialContainer>
  /*
  ...
  */
  languageVersion: 1,
  /*
  ------------------------------------Global Position Data
  */
  defaultContainerPosition: [0, -5, 0],
  defaultContainerCameraPosition: [0, -5, 2],

  introContainerPosition: [0, 0, 0],
  introContainerCameraPosition: [0, 0, 2],

  aboutContainerPosition: [-5, 0, 0],
  aboutContainerCameraPosition: [-5, 0, 1],

  menuContainerPosition: [5, 0, 0],
  menuContainerCameraPosition: [5, 0, 2],

  /*
  -----------------------------------------------<Initial Overlay 2D staff>
  */
  /*
  decides if <InitialOverlay> is mounted or not;
  <InitialOverlay> is based on useTransition;
  By means of <Cookies>'s buttons value "false" is set i.e. this button dismounts <Cookies> & <InitialOverlay>
   */
  isInitialOverlayMounted: true,
  // isInitialOverlayMounted: false, // to switch off <InitialContainer>
  /*
  FakeLoader should by trigger only one time!
  If not going from <CookiesPage> to <MainPage> triggers <FL> when <Cookies> are mounted i.e. both are visible and overlap...horrror
  Is changed to "1" in <FakeLoader> / useSpring / onRest;
  */
  fakeLoaderCounter: 0,

  /*
  ----------------------------------------<IntroContainer> 3D Staff
  /*
  /*
  this value is required in <ContainerIntr>
  it is set in <IntroWheelGesture> & <IntroDragGesture>
  it's used to asset "proper and unique" way of moving to user device / experience;
  it's actually "first part" of condition used in <IntroWheelGesture> & <IntroDragGesture>;
  */
  introContainerEventType: 'none',
  /*
  idea: when user scrolls/drags to the end, it changes to "true" within <IntroWheelGesture> & <IntroDragGesture> and:
  (1) scrolls/drags gestures are disabled
  (2) <EndButtons> comes into the scene. i.e. goes on z-axis from fog  
  */
  endOfContainerIntro: false,
  /*
  it is changed to true/false in <EndButton> / useSpring / onRest(); it actually works as switcher;
  when is true <AuxiliaryButtons> come into the scene
  */
  startOfContainerIntroShow: false,
  /*
  -----------------------------------------------<Cookies 2D staff>
  */
  /*
  decides if <Cookies> is mounted or not
  <Cookies> are based on useTransition;
  */
  // isCookiesPopUpMounted: false,
  isCookiesPopUpMounted: false, // to switch off <InitialContainer>

  /*
  -----------------------------------------------<Turbo Overlay 2D staff>
  */
  isTurboOverlayActive: 0,

  /*
  -----------------------------------------------<Header 2D staff>
  .....main idea: <Header> is invisible when eny of menu is visible
  is used to toggle display value of <Header> between "none" and "block"
  is changed to false in "77digitButton" and "manuBatton"
  is changed to true by <AboutMenu>'s buttons and <MainMenu>'s buttons 
  */
  isHeaderDisplayed: true,
  /*
  ---------------------------------------------<ContainerAbout>
  */
  containerAboutGestureType: 'none',
  /*
  is used in "IncrementalSpinOnDrag" / endDragHandler; as condition in logic and is also changed to true/false in toggler way
  */
  isClientSideVisible: true,
  /*
  "sliderIsReady" is "true" when user rotates <SpinningBox> 360deg; all happens in "ContAboutGest"; it triggers <SliderGesturePrompt> & <SlidesProgressIndicator> & is a value in "ContAboutNavGest" / enable
  */
  sliderIsReady: false,
  /*
  props used in <Slide1>; all manipilations take place in "contAboutSlide1.js" gesture
  */
  slide1Part: 0,
  /*
  props that allows to unmount <SpinningBoxGesturePrompt>
  is set to false in "ContAboutGest" / useSpring() / onChange()
  */
  isSpinningBoxGesturePromptMounted: true,
  /*
  --------------------------------------------<ContainerAbout2DStaff>
  */
  /*
  is changed in <NavigatoionPanel2D>;
  */
  // containerAboutEventCounter: 0,
  /*
  is incremented / decremented in <NavigatoionPanel2D> / onClick handlers;
  */
  containerAboutVisibleSlideIndex: 0,
  // containerAboutSlideIndex: 0,
  /*
  is incremented / decremented in <NavigatoionPanel2D>;
  */
  containerAboutSlidingDirection: 'none',
  /*
  for 2D fake-button that rotates <SpinningBox>'s sides
  */
  isRotateButtonActive: false,

  /*
  -------------------------------------------<Container Manu 2D staff> 
  */
  /*
 Both are changed in <ContactButton>'s and <ContactOverlay>'s onClickHandlers;
 "isLinksToContainersActive" means that links are active and works as link; we don't want them to work when <ContactOveerlay> is open;
 */
  isLinksToContainersActive: true,
  isContactOverlayOpened: false,
});

export { canvasState };
