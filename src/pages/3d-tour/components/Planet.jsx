import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Planet = ({
  texture,
  size = [1, 1, 1],
  orbitRadius = 0,
  orbitSpeed = 0,
  rotationSpeed = 0,
}) => {
  const meshRef = useRef();
  const map = useTexture(texture);
  const angleRef = useRef(0); // track orbit angle

  useFrame((state, delta) => {
    // Orbit motion
    angleRef.current += orbitSpeed * delta;
    meshRef.current.position.x = orbitRadius * Math.cos(angleRef.current);
    meshRef.current.position.z = orbitRadius * Math.sin(angleRef.current);

    // Rotation on axis
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={meshRef} scale={size}>
      <icosahedronGeometry args={[1, 16]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Planet;
