import { useThree } from '@react-three/fiber';

const CanvasStateObserver = () => {
  const canvasState = useThree();
  console.log('<CanvasStateObserver>:', canvasState);
  // console.log(
  //   '<CanvasStateObserver> / scene / <IntroSecton>:',
  //   canvasState.scene.children[1]
  // );
  return null;
};

export default CanvasStateObserver;
