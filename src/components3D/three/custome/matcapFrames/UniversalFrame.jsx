import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
/*
Components
*/
import BasicUseMatcapTexture from '../matcapMaterials/BasicUseMatcapTexture';
import MatcapMaterialInMemo from '../matcapMaterials/MatcapMaterialInMemo';
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
} from './UniversalFramesFormats';
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
const UniversalFrame = React.memo(
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

export default UniversalFrame;

/*
_____create instance:
<UniversalFrame
  groupProps={{
    name: 'groupForPanelFront',
    scale: [0.15, 0.15, 0.15],
    position: [0, -0.35, 0],
  }}
  format="banner"
  cylinderFi={0.015}
  sphereRadious={0.03}
/>

... case of smaller frames:

<UniversalFrame
        groupProps={{ scale: [0.3, 0.3, 0.3], rotation: [0, 0, Math.PI * 0.5] }}
/>
*/

/*
Constructor

CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

radiusTop — Radius of the cylinder at the top. Default is 1.

radiusBottom — Radius of the cylinder at the bottom. Default is 1.

height — Height of the cylinder. Default is 1.

radialSegments — Number of segmented faces around the circumference of the cylinder. Default is 8
heightSegments — Number of rows of faces along the height of the cylinder. Default is 1.
openEnded — A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
thetaStart — Start angle for first segment, default = 0 (three o'clock position).
thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
*/

/*
    version_1: based on boolean props banner / postrait / column
    */
/*
    Final value of these consts depend on props passed from component that includes instance of <UF>...
    */
// const cornersPositions = useMemo(() => {
//   return (portrait && portraitCorners) || (banner && bannerCorners);
// }, [portrait, banner]);

// const verticalBars = useMemo(() => {
//   return (portrait && portraitHeight) || (banner && bannerHeight);
// }, [portrait, banner]);

// const horizontalBars = useMemo(() => {
//   return (portrait && portraitWidth) || (banner && bannerWidth);
// }, [portrait, banner]);
