import React from 'react';
/*
 Drei Staff
 */
import { OrbitControls } from '@react-three/drei';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

const OrbitControler = React.forwardRef((props, ref) => {
  /*
  Global State Section;
  canvasState = {isOrbitControlEnabled: false,}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  JSX
  */
  return (
    <OrbitControls
      ref={ref}
      rotateSpeed={0.3}
      enableZoom={false}
      enablePan={false}
      minAzimuthAngle={-Math.PI * 0.25}
      maxAzimuthAngle={Math.PI * 0.25}
      minPolarAngle={Math.PI * 0.5} // high number = bird perspective
      maxPolarAngle={Math.PI * 0.5} //low number = plane's bottom 'visible'
      enabled={canvasGlobalState.isInitialSectionOrbitable ? true : false}
    />
  );
});

export default OrbitControler;

/*
keys={{
  LEFT: 'ArrowLeft', //left arrow
  UP: 'ArrowUp', // up arrow
  RIGHT: 'ArrowRight', // right arrow
  BOTTOM: 'ArrowDown', // down arrow
}}
*/

/*
https://jsfiddle.net/kLto52qw/

var reset = document.getElementById('controls')
  reset.addEventListener("click", function() {
    var angle = Math.PI * 3.0 / 4.0;
    var spherical_target = new THREE.Spherical(1, Math.PI / 2, angle);
    var target = new THREE.Vector3().setFromSpherical(spherical_target);
    controls.target = new THREE.Vector3(0,0,0) ;
    controls.update();
    controls.saveState();
    controls.reset();
  });
*/
