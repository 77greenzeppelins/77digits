import { useCallback, useEffect } from 'react';
import { useSpring } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';

const BasicDragReturn = () => {
  //_____Data from fiber's hook
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  //_____Spring Section

  const [{ position, rotation, scale }, api] = useSpring(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
  }));

  //_____Gesture Section

  const eventHandler = useCallback(
    ({ down, movement: [movementX, movementY] }) => {
      api.start({
        position: [
          down ? movementX / aspect : 0,
          down ? movementY / -aspect : 0,
          down ? movementY / -aspect : 0,
        ],
        rotation: [
          down ? movementX / aspect : 0,
          down ? movementY / -aspect : 0,
          0,
        ],
        immediate: down,
      });
    },
    [api, aspect]
  );
  const basicDragReturn = useDrag(eventHandler);

  //_____
  // useEffect(() => {
  //   console.log('position, rotation, scale', position, rotation, scale);
  // }, [position, rotation, scale]);

  return [position, rotation, scale, basicDragReturn];
};

export default BasicDragReturn;
