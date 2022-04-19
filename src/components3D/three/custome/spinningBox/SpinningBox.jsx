import React, { useRef } from 'react';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';

/*
State Staff
*/
// import { canvasState } from '../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBox = React.forwardRef(
  (
    {
      /*
      props for <SpinningBox>'s main <group>; scale & position;
      */
      groupProps,
      /*
      props for <SpinningBoxSide> layout and its children
      */
      spinningBoxConfig,
      /*
      springValue from "ContainerAboutGesture.js"
      */
      rotateStepByStep,
      // rotateSpinningBoxSide,
      gesturesForSidesRotations,
    },
    ref
  ) => {
    /*
    References
    */
    const autorotatingGroup = useRef();
    /*
    Global State Section
    */
    // const canvasGlobalState = useSnapshot(canvasState);
    // useEffect(() => {
    //   console.log('gesturesForSidesRotations', gesturesForSidesRotations);
    // }, [gesturesForSidesRotations]);

    /*
    JSX
    */
    return (
      <a.group ref={ref} {...groupProps}>
        <a.group ref={autorotatingGroup} rotation={rotateStepByStep}>
          {spinningBoxConfig.map(
            (
              {
                sideProps,
                labelProps,
                labelPropsReverse,
                canvasProps,
                frameProps,
              },
              index
            ) => (
              <SpinningBoxSide
                key={index}
                sideProps={sideProps}
                animatedRotation={gesturesForSidesRotations[index]}
                labelProps={labelProps}
                labelPropsReverse={labelPropsReverse}
                canvasProps={canvasProps}
                frameProps={frameProps}
              />
            )
          )}
        </a.group>

        {/*
        Section of additional component; one for each side
        */}
        {/* {canvasGlobalState.currentContainer === 'aboutContainer' && (
          <GesturePrompt
            scena="caDragSpinningBox"
            groupProps={{
              position: gesturePromptsData.position,
              // visible: gpVisibility,
            }}
          />
        )} */}
        {/* <mesh
          // scale={xScale}
          position={[0, -0.93, 0]}
          visible={false}
          // rotation={rotateStepByStep}
        >
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh> */}
      </a.group>
    );
  }
);

export default SpinningBox;
