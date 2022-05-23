import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
/*
Components
*/
import MatcapMaterialInMemo from '../../../../../../../matcapMaterials/MatcapMaterialInMemo';
/*
 useMatcapTexture Staff
 */
// import { useMatcapTexture } from '@react-three/drei';
/*
Basic Data
This is a set of "configuration data" that allowes to configure either portrait-like frame or banner-like frame;
*/
import {
  portraitWidth,
  portraitHeight,
  portraitCorners,
  portraitWidthSize,
  portraitHeightSize,
  bannerWidth,
  bannerHeight,
  bannerCorners,
  bannerWidthSize,
  bannerHeightSize,
  columnWidth,
  columnHeight,
  columnCorners,
  columnWidthSize,
  columnHeightSize,
  verticalFormatWidth,
  verticalFormatHeight,
  verticalFormatCorners,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
} from './sideFrameData';
/*
Basic Data
This staff is neccesary as frame's concept is based on InstanceMeshes object
*/
const [thisCorner, thisSideVertical, thisSideHorizontal] = [
  new THREE.Object3D(),
  new THREE.Object3D(),
  new THREE.Object3D(),
];

/*
---------------------------------------------------------------------------
*/

const SideFrame = React.memo(
  ({ groupProps, cylinderFi, sphereRadious, format }) => {
    /*
    ...
    */
    // useEffect(() => {
    //   console.log('sideHorizontalProps:', sideHorizontalProps);
    //   console.log('sideVerticalProps:', sideVerticalProps);
    // }, [sideHorizontalProps, sideVerticalProps]);
    /*
    References for instancedMeshes
    Required by InstanceMesh's procedur...
    */
    const corners = useRef();
    const sidesVertical = useRef();
    const sidesHorizontal = useRef();

    /*
    version_2; based on string props "format"
    */
    let cornersPositions = null;
    let verticalBars = null;
    let horizontalBars = null;
    let cylinderHorizontalSize = null;
    let cylinderVerticalSize = null;

    switch (format) {
      case 'banner':
        cornersPositions = bannerCorners;
        horizontalBars = bannerWidth;
        verticalBars = bannerHeight;
        cylinderHorizontalSize = bannerWidthSize;
        cylinderVerticalSize = bannerHeightSize;
        break;
      case 'portrait':
        cornersPositions = portraitCorners;
        horizontalBars = portraitWidth;
        verticalBars = portraitHeight;
        cylinderHorizontalSize = portraitWidthSize;
        cylinderVerticalSize = portraitHeightSize;
        break;
      case 'column':
        cornersPositions = columnCorners;
        horizontalBars = columnWidth;
        verticalBars = columnHeight;
        cylinderHorizontalSize = columnWidthSize;
        cylinderVerticalSize = columnHeightSize;
        break;
      case 'verticalFormat':
        cornersPositions = verticalFormatCorners;
        horizontalBars = verticalFormatWidth;
        verticalBars = verticalFormatHeight;
        cylinderHorizontalSize = verticalFormatWidthSize;
        cylinderVerticalSize = verticalFormatHeightSize;
        break;
      default:
        // console.log('UniversalCanvas / format = default');
        cornersPositions = null;
        verticalBars = null;
        horizontalBars = null;
    }

    /*
    Frame's layout creator;
    using "InstanceMesh's tremplate" we position "atom-parts" of frame;
    */
    useLayoutEffect(() => {
      /*
     Set corners' position
     */
      cornersPositions &&
        cornersPositions.map((item, index) => {
          thisCorner.position.set(...item);
          thisCorner.updateMatrix();
          corners.current.setMatrixAt(index, thisCorner.matrix);
          return null;
        });
      corners.current.instanceMatrix.needsUpdate = true;

      /*
      Set vertical bars' position
      */
      verticalBars &&
        verticalBars.map((item, index) => {
          thisSideVertical.position.set(...item.position);
          thisSideVertical.rotation.set(...item.rotation);
          thisSideVertical.updateMatrix();
          sidesVertical.current.setMatrixAt(index, thisSideVertical.matrix);
          return null;
        });
      sidesVertical.current.instanceMatrix.needsUpdate = true;

      /*
      Set horizontal bars' position
      */
      horizontalBars &&
        horizontalBars.map((item, index) => {
          thisSideHorizontal.position.set(...item.position);
          thisSideHorizontal.rotation.set(...item.rotation);
          thisSideHorizontal.updateMatrix();
          sidesHorizontal.current.setMatrixAt(index, thisSideHorizontal.matrix);
          return null;
        });
      sidesHorizontal.current.instanceMatrix.needsUpdate = true;
    }, [cornersPositions, horizontalBars, verticalBars]);

    /*
    JSX
    Create group with  three InstancedMesh !
    */
    return (
      <group {...groupProps}>
        <instancedMesh
          name="corners"
          ref={corners}
          args={[null, MatcapMaterialInMemo(), 4]}
        >
          <sphereGeometry args={[sphereRadious || 0.035, 16, 16]} />
          {/* <meshMatcapMaterial matcap={matcapTexture} /> */}
          {/* <BasicUseMatcapTexture textureIndex={1} /> */}
        </instancedMesh>

        <instancedMesh
          name="sidesHorizontal"
          ref={sidesHorizontal}
          args={[null, MatcapMaterialInMemo(), 2]}
        >
          <cylinderGeometry
            args={[
              cylinderFi || 0.02,
              cylinderFi || 0.02,
              cylinderHorizontalSize,
              10,
            ]}
          />
        </instancedMesh>

        <instancedMesh
          name="sidesVertical"
          ref={sidesVertical}
          args={[null, MatcapMaterialInMemo(), 2]}
        >
          <cylinderGeometry
            args={[
              cylinderFi || 0.02,
              cylinderFi || 0.02,
              cylinderVerticalSize,
              10,
            ]}
          />
        </instancedMesh>
      </group>
    );
  }
);

export default SideFrame;
