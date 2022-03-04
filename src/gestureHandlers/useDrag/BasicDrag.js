import { useCallback, useEffect } from 'react';
import { useSpring } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';

const BasicDrag = () => {
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
    ({ offset: [offsetX, offsetY] }, active) => {
      api.start({
        position: [offsetX / aspect, offsetY / -aspect, 0],
        rotation: [(offsetX / aspect) * 5, (offsetY / -aspect) * 2, 0],
        scale: active ? 1.5 : 1,
      });
      // console.log('position, rotation, scale', position, rotation, scale);
    },
    [api, aspect]
  );
  const basicDrag = useDrag(eventHandler);

  //_____
  useEffect(() => {
    console.log('position, rotation, scale', position, rotation, scale);
  }, [position, rotation, scale]);

  return [position, rotation, scale, basicDrag];
};

export default BasicDrag;

/*
(!)___ alternative approach; in case of r3F working with "vectors" seems to be more suitale I guess (so above syntax is more three-like...yet it's worth knowing both...)

1___use it in target component
const [x, y, basicDrag] = BasicDrag();

2___callback for dragging with 'return to initial position' effect...
const eventHandler = useCallback(
({ down, movement: [movementX, movementY] }) => {
    api.start({
     x: down ? movementX / aspect : 0,
     y: down ? movementY / -aspect : 0,
     immediate: down,
    });
  },
  [api, aspect]
);

3___
return [x, y, basicDrag];


*/
