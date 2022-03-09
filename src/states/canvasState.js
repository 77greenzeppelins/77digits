import { proxy } from 'valtio';

const canvasState = proxy({
  /*
  Tests
  */
  spinningBox1: false,
  /*
  ------------------------------------------Universal Property
  ___currentContainer
  ...is changed within onClick events that allowe user to jump from container to container;
  ...other options are: answerYesSection, answerNoSection, aboutSection; 
  ...is changed for the very first time in <Loader>, from "none" to "introSection1"
  ___isMobileDevice
  ...is set in <ContaineIntroContent>;
  ...main idea: depending on device type various "gesture data" are applied; it allowes to avoid adding "drag gesture data" to desktop devices when target of gesture is "window"; without this solution user can't drag and rotate Raphael painting  without sudden 'scroll'; btw mixin wheel and drag was a bloody mess!!! 
  ...options: introContainer, aboutContainer, menuContainer, answerYesContainer, answerNoContainer
  */
  // currentContainer: 'none',
  currentContainer: 'introContainer', // to switch off <InitialContainer>

  // isMobileDevice: true,
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
  ----------------------------------------<IntroContainer> 3D Staff
  */
  /*
  constants for <IntroContainerWheelAndDrag>
  dragBounds: { top: -3550, bottom: 0 } would by an option if you want to switch direction of dragging i.e. "dragging up / passing thumb up" means go deep in z-axis
  */
  introContainerWheelDragBounds: { top: 0, bottom: 3600 },
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
  is set to "true" / "false" in <ContainerIntroWheelAndDrag> depending on "y" value
  have output in <AnswerYes> & <AnswerNo>; thera are actually buttons from "a11y" point of view, and this change makes makes them "clickable"
  */
  isYesNoButtonClickable: false,

  /*
  ...idea behind: it allowes to switch on / off shader background for "odlot"
  is set to true / false in <ContainerIntroContent> / useFrame;
   */
  // isOdlotBackgroundVisible: false,
  // isOdlotBackgroundVisible: true,

  /*
  -----------------------------------------------<Initial Overlay 2D staff>
  */
  /*
  decides if <InitialOverlay> mounted or not;
  <InitialOverlay> are built on useTransition;
  By means of <Cookies>'s buttons value "false" is set i.e. this button dismounts <Cookies> & <InitialOverlay>
  By means of <CookiesPage>, button 
   */
  // isInitialOverlayMounted: true,
  isInitialOverlayMounted: false, // to switch off <InitialContainer>
  /*
  FakeLoader should by trigger only one time!
  If not going from <CookiesPage> to <MainPage> triggers <FL> when <Cookies> are mounted i.e. both are visible...horrror
  Is changed to "1" in <FakeLoader> / useSpring / onRest;
  */
  fakeLoaderCounter: 0,
  /*
  Multi-string-values property;
  first (defoult) option: "loaderVisible", 
  second option: "loaderInvisible"; is changed in <Loader> when setInterval expires; it makes <Loader> invisible and <Cookies> visible
  thirt option: "cookiesAreEatten"; is Changed in <Cookies> when user takes decision about cookies;
  */
  // loaderCookisLink: 'loaderVisible',
  loaderCookisLink: 'cookiesAreEatten',
  /*
  -----------------------------------------------<Cookies 2D staff>
  */
  /*
  decides if <Cookies> is mounted or not
  <Cookies> are built on useTransition;
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
  is set to "true" in <ContainerAboutIntroduction>'s onClick event; 
  when user clicks any of "you&MeButton" a sequence of animations takes place:
  (1) <CAI>'s display is set to "none" i.e it's not visible
  (2) 
  what actually triggers the very next "chapter" of <ContainerAbout>
  is set to "false" ...?
  */
  // isContainerAboutIntroductionClosed: false,
  /*
  refers to <ContainerAbout> introduction section; there is a sytuation where user have to choose language wersion
  */
  // userLanguagePreference: 'none',
  /*
  is changed in <CarouselPanelButtons> 2D component;
  */
  containerAboutSlideIndex: 0,
  containerAboutSlidingDirection: 'none',
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
