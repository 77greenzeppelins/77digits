import React from 'react';

//_____Shaders Section
import { MeshConeShaderMaterial } from './MeshConeShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ MeshConeShaderMaterial });

const MeshConeShaded = React.forwardRef(
  ({ meshProps, coneArgs, thisShaderMaterial }, ref) => {
    return (
      <mesh ref={ref} {...meshProps}>
        <coneGeometry {...coneArgs} />
        {thisShaderMaterial || <meshConeShaderMaterial />}
      </mesh>
    );
  }
);

export default MeshConeShaded;

/*
<MeshConeShaded
 meshProps={{position:[0,0,0], name: 'basicCone'}}
coneArgs={{args:[1,1,4,]}} materialProps={{color:[1,1,1]}} />

 */

/*
 Constructor
ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
radius — Radius of the cone base. Default is 1.
height — Height of the cone. Default is 1.
radialSegments — Number of segmented faces around the circumference of the cone. Default is 8
heightSegments — Number of rows of faces along the height of the cone. Default is 1.
openEnded — A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
thetaStart — Start angle for first segment, default = 0 (three o'clock position).
thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
  */
