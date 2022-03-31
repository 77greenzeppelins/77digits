import { proxy } from 'valtio';

const canvasState = proxy({
  /*
  Tests
  */
  // spinningBox1: false,
  /*
  ------------------------------------------Universal Property
  ___currentContainer
  ...is changed within onClick events that allowe user to jump among containers;
  ...options: introContainer, aboutContainer, menuContainer, answerYesContainer, answerNoContainer
  */
  currentContainer: 'none',
  // currentContainer: 'introContainer', // to switch off <InitialContainer>
  /*
  ...
  */
  languageVersion: 'pl',

  /*
  ------------------------------------Constants for buttons onClick events...
  */
  defaultContainerPosition: [0, 3, 0],
  defaultContainerCameraPosition: [0, 3, 2],

  introContainerPosition: [0, 0, 0],
  introContainerCameraPosition: [0, 0, 2],

  aboutContainerPosition: [-5, 0, 0],
  aboutContainerCameraPosition: [-5, 0, 1],

  answerYesContainerPosition: [0, -6, 0],
  answerYesContainerCameraPosition: [0, -6, 2],

  answerNoContainerPosition: [0, -9, 0],
  answerNoContainerCameraPosition: [0, -9, 2],

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
  */
  /*
  constants for onGesture events; last 4530
  */
  introContainerWheelDragBounds: { top: 0, bottom: 3920 },
  /*
  this value is required in <ContainerIntroContent>
  it is set in <IntroWheelGesture> & <IntroDragGesture>
  it's used to asset "proper and unique" way of moving to user device / experience;
  it's actually "first part" of condition used in <IntroWheelGesture> & <IntroDragGesture>;
  */
  introContainerEventType: 'none',
  /*
  this value is used in <IntroWheelGesture> & <IntroDragGesture> and is "second part" of condition!!!
  */
  introContainerEventCounter: 0,
  /*
  idea: when user scrolls/drags to the end, it changer to "true" and:
  (1) scrolls/drags gestures are disabled
  (2) <InstantContact> comes into the scene. i.e. goes on z-axis from fog  
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
  properties for onClick events that engage TurboOverlay
  */
  /*
  -----------------------------------------------<Turbo Overlay 2D staff>
  */
  isTurboOverlayActive: 0,
  /*
  .....main idea: <Header> is invisible when eny of menu is visible
  is used to toggle display value of <Header> between "none" and "block"
  is changed to false in "77digitButton" and "manuBatton"
  is changed to true by <AboutMenu>'s buttons and <MainMenu>'s buttons 
  */
  /*
  -----------------------------------------------<Header 2D staff>
  */
  isHeaderDisplayed: true,
  /*
  is set to "true" in <Cookies> which button's onClick chandlers can do this; as a result we get rid of "cookies pop-up" and have clean space on page's bottom...
  take part in some conditions:
  ...in <IntroWheelGesture> 
  ...if it's "false" + currentContainer === "menuContainer" => <Cookies> should has display: 'none'
  ....if it's "false" + currentContainer === "aboutSontainer" + user clicks some button within <AboutContainerIntro> => <Cookies>'s color should change to pink(?) + user should receive message about expectation towards  "cookies pop-up".
  */
  // userAteCookies: false,

  /*
  ---------------------------------------------<ContainerIntro 3D Staff>
  */
  // isOdlotBackgroundVisible: false,

  /*
  --------------------------------------------<Container About 2D Staff>
  */
  /*
  is changed in <CarouselPanelButtons> 2D component;
  */
  containerAboutSlideIndex: 0,
  containerAboutSlidingDirection: 'none',
  /*
  is changed in <NavigatoionPane> 2D component; it works as toggler; when value is 0 rotation has "initial rotation" if value is 1 rotation has "rotated rotation"
  */
  slide0Rotation: false,
  slide1Rotation: false,

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
