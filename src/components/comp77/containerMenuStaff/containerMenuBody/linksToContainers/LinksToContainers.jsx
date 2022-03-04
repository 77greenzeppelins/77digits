import React from 'react';
/*
Components
*/
import LinkToContainer from './LinkToContainer';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';
/*
Basic Data
*/
const containersArray = [
  { id: 1, label: 'Ty & odlot', destinationContainer: 'introContainer' },
  { id: 2, label: 'Ty & Ja', destinationContainer: 'aboutContainer' },
  { id: 3, label: 'You & Me', destinationContainer: 'aboutContainer' },
  { id: 4, label: 'Ja & 3D', destinationContainer: 'answerYesContainer' },
  // { id: 4, label: 'noOdlot', destinationContainer: 'answerNoContainer' },
];

/*
------------------------------------------------------------------------
*/
const LinksToContainers = () => {
  /*
  Global State Section
  canvasState={isLinksToContainersActive: true}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  "animatedValue" application: allowes to "hide" <LinksToContainers> by the following sewttrings: {opacity: 0, pointerEvents: 'none'}
  */
  const { animatedValue } = useSpring({
    from: { springValue: 1 },
    to: {
      animatedValue: canvasGlobalState.isLinksToContainersActive ? 1 : 0,
    },
  });
  /*
  JSX
  */
  return (
    <animated.div
      className="links-to-containers__wrapper"
      /*
      using Spring's "animatedValue" we can "hide" all "links"; it is acomplished by manipulating two CSS's properties;
      */
      style={{
        opacity: animatedValue,
        pointerEvents: canvasGlobalState.isLinksToContainersActive
          ? 'auto'
          : 'none',
      }}
    >
      {containersArray.map(({ id, label, destinationContainer }) => (
        <LinkToContainer
          key={id}
          label={label}
          destinationContainer={destinationContainer}
        />
      ))}
    </animated.div>
  );
};

export default LinksToContainers;
