import React from 'react';
import { useNavigate } from 'react-router-dom';

/*
Global State Staff
*/
import { canvasState } from '../../../states/canvasState';
import { useSnapshot } from 'valtio';

/*
-------------------------------------------------------------------------------
*/
const PageCookies = () => {
  /*
Global State Section
canvasstate={..., currentSection: 'initialSection'}
*/
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useNavigation Section
  */
  const navigate = useNavigate();

  /*
  User Experience Section
  This "click event" let user comes back to <MainPage> / 3D world
  Function precises exact place within CANVAS where user should return to; that is the place wher user clicked link driving to <PageCookies> 
  */
  const onClick = () => {
    switch (canvasGlobalState.currentSection) {
      case 'initialSection':
        if (
          canvasGlobalState.isOrbitControlEnabled === true ||
          canvasGlobalState.isInitialSectionContainerScrollable === false
        ) {
          canvasState.isOrbitControlEnabled = false;
          canvasState.isInitialSectionContainerScrollable = true;
        }
        break;
      // case 'answerYesSection':
      //   canvasState.currentSection = 'answerYesSection';
      //   // if (
      //   //   canvasGlobalState.isOrbitControlEnabled === true ||
      //   //   canvasGlobalState.isInitialSectionContainerScrollable === false
      //   // ) {
      //   //   canvasState.isOrbitControlEnabled = false;
      //   //   canvasState.isInitialSectionContainerScrollable = true;
      //   // }
      //   break;
      default:
        console.log('PageCookies / onClick / switch');
    }
    navigate('/');
    //_____
    // console.log(
    //   'PageCookies / onClick / switch / canvasGlobalState.isOrbitControlEnabled',
    //   canvasGlobalState.isOrbitControlEnabled
    // );
    // console.log(
    //   'PageCookies / onClick / switch / canvasGlobalState.isInitialSectionContainerScrollable',
    //   canvasGlobalState.isInitialSectionContainerScrollable
    // );
  };
  /*
  useEffect Test Section
  */
  // useEffect(() => {
  //   console.log('<PageCookies> / location:', location);
  // }, [location]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // overflowX: 'hidden',
      }}
    >
      <h2 style={{ color: 'white' }}>Let me tell You about cookies!</h2>
      <p>
        <button style={{ color: 'white' }} onClick={onClick}>
          Back to Canvas!!!
        </button>
      </p>
    </div>
  );
};

export default PageCookies;

/*
resource: https://www.youtube.com/watch?v=UjHT_NKR_gU ; time 20:40
author seems to suggest that <Link> === button + useNavigate hook 
yet
in my case I've noticed:
using <Link> when return to <MainPage> <InitialOverlay> is triggered 
using <button> when return to <MainPage> <InitialOverlay> is not triggered 
*/
