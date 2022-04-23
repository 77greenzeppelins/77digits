import React from 'react';
/*
Components
*/
import CustomeMeshWithMatcap from '../../../../_meshesWithMatcap/CustomMeshWithMatcap';
// import ArrowSharpGeometry from '../../../../extrudedObjects/arrows/arrowSharp/ArrowSharpGeometry';
import ArrowSharpHorizontalGeometry from '../../../../extrudedObjects/arrows/arrowSharp/ArrowSharpHorizontalGeometry';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import { arrowPromptData } from '../slide0Data';

/*
-------------------------------------------------------------------------
*/
const ArrowPrompt = ({ responsiveness, arrowPromptGroupRotation }) => {
  /*
  responsiveness = 1 => "mobileLike width" & arrows are not visible on <SpinningBox> sides; responsiveness = 0 => "tabletLike width" arrows under <SpinningBox>
  */
  return (
    <a.group
      position={
        responsiveness
          ? arrowPromptData.mobileGroupPosition
          : arrowPromptData.tabletGroupPosition
      }
      //   rotation={[0, Math.PI, 0]}
      rotation={arrowPromptGroupRotation}
    >
      {/* <group rotation={[0, 0.01 * Math.PI, 0]}> */}
      <CustomeMeshWithMatcap
        meshProps={
          responsiveness
            ? arrowPromptData.mobileMeshPropsLeftArrow
            : arrowPromptData.tabletMeshPropsLeftArrow
        }
      >
        <ArrowSharpHorizontalGeometry />
      </CustomeMeshWithMatcap>
      {/* </group> */}
      <CustomeMeshWithMatcap
        meshProps={
          responsiveness
            ? arrowPromptData.mobileMeshPropsRightArrow
            : arrowPromptData.tabletMeshPropsRightArrow
        }
      >
        <ArrowSharpHorizontalGeometry />
      </CustomeMeshWithMatcap>
    </a.group>
  );
};

export default ArrowPrompt;
