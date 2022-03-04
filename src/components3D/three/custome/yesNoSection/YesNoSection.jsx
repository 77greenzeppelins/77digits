import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
/*
Components
*/
import RaphaelPainting from './RaphaelPainting';
import AnswerYes from './AnswerYes';
import AnswerNo from './AnswerNo';
/*
Global State Staff
*/
// import { useGesture } from '@use-gesture/react';
// import { canvasState } from '../../../../states/canvasState';
/*
 useMatcapTexture Staff
 */
import { useMatcapTexture } from '@react-three/drei';
/*
Gesture Staff
*/
import BasicMove from '../../../../gestureHandlers/useMove/basicMove';
import DragRotateReturn from '../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
// import { useSnapshot } from 'valtio';
/*
Basic Data
"tillFactor" for sake of "BasicMove"
*/
const [
  tillFactor,
  rightDragLimitX,
  leftDragLimitX,
  rightDragLimitY,
  leftDragLimitY,
] = [
  0.2, // BasicMove
  /*
  DragRotateReturn props
  */
  -0.15,
  -0.15,
  1,
  -1,
];
/*
-------------------------------------------------------------------------------
*/
const YesNoSection = ({ groupProps, rotationX }) => {
  /*
  References Section
  */
  const group = useRef();
  /*
 Global State Section
 */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  MatcapMaterial Section
 */
  const [matcapTexture] = useMatcapTexture(
    '434240_D3D3CF_898784_A4A49F', //silver-like
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    1024
  );
  const thisMatcapMaterial = useMemo(() => {
    return new THREE.MeshMatcapMaterial({
      matcap: matcapTexture,
    });
  }, [matcapTexture]);

  /*
  Basic Data
  Shared Materiasl For answer's text
 */
  // const textMaterial = useMemo(() => {
  //   return new THREE.MeshBasicMaterial({ color: [1, 0, 0] });
  // }, []);

  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactor: tillFactor,
    // initialRotation: [groupProps.rotation],
    /*
    if you set "enabled" as below after user action "DragRotateReturn" current effect disappears i.e user must scroll to the very end again to activate it
    ???
    */
    // enabled: canvasGlobalState.isYesNoButtonClickable,
  });

  const [orbitImitation, dragRotateReturn] = DragRotateReturn({
    /*
    set initial value of "rotation.z";
    */
    rotationX: rotationX,
    /*
    set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
    */
    rightDragLimitX: rightDragLimitX,
    leftDragLimitX: leftDragLimitX,
    /*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
    rightDragLimitY: rightDragLimitY,
    leftDragLimitY: leftDragLimitY,
  });

  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      ref={group}
      {...dragRotateReturn()}
      rotation={orbitImitation}
    >
      {/**/}
      <RaphaelPainting groupProps={{ name: 'groupForRaphaelPainting' }} />
      {/**/}
      <a.group rotation={rotateWithMouseMove} name="groupForAnswers">
        <AnswerYes
          groupProps={{
            position: [-0.15, 0.5, 0.15],
            rotation: [Math.PI * 0.2, 0, 0],
            name: 'groupForAnswerYes',
          }}
          /*
          Props for "cone"
          */
          thisMatcapMaterial={thisMatcapMaterial}
        />
        <AnswerNo
          groupProps={{
            position: [0.15, 0.5, 0.15],
            rotation: [Math.PI * 0.2, 0, 0],
            name: 'groupForAnswerNo',
          }}
          /*
          Props for "cone"
          */
          thisMatcapMaterial={thisMatcapMaterial}
        />
      </a.group>
    </a.group>
  );
};

export default YesNoSection;

/*
import { useMatcapTexture } from '@react-three/drei';

matcapMaterial={matcapMaterial}

const [matcapTexture] = useMatcapTexture(
    '434240_D3D3CF_898784_A4A49F', //silver-like
    // '1D2424_565F66_4E555A_646C6E', //black, high-gloss, environment-map
    // '221917_928380_5F504D_7C746C', //brown marmur-like, nooo
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    // '2D2D2F_C6C2C5_727176_94949B', //grey, high-gloss, + navy accent !
    // '300706_888576_822821_876E79', //red-multicolor, high-gloss
    // '302721_CAC1BB_7A706A_91959B', //grey-brown, medium-gloss
    // '312C34_A2AAB3_61656A_808494', //grey-navy, medium-gloss + suble environment-map
    // '3E2335_D36A1B_8E4A2E_2842A5', //multicolor
    // '3F3A2F_91D0A5_7D876A_94977B', //multicolor
    // '3F4441_D1D7D6_888F87_A2ADA1', //grey, high-gloss,
    // '474843_CECEC4_898883_A3A3A4', //
    1024
  );

  const matcapMaterial = useMemo(() => {
    const matcapMaterial = new THREE.MeshMatcapMaterial();
    matcapMaterial.matcap = matcapTexture;
    return matcapMaterial;
  }, [matcapTexture]);
  
  */
