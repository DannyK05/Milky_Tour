import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Planet = ({ texture, size, position = [0, 0, 0], speed = 0.01 }) => {
  const meshRef = useRef();
  const map = useTexture(texture);

  useFrame(() => {
    meshRef.current.rotation.y += speed;
  });

  return (
    <mesh ref={meshRef} scale={size} position={position}>
      <icosahedronGeometry args={[1, 16]} /> <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Planet;
