import { useFrame, useThree } from "@react-three/fiber";

const CameraController = ({ x, y }) => {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;
