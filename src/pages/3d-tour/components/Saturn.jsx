import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Saturn = () => {
  const [surfaceMap, ringMap] = useTexture([
    "/assets/textures/saturn/2k_saturn.jpg",
    "/assets/textures/saturn/2k_saturn_ring_alpha.png",
  ]);
  const surRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (surRef.current) surRef.current.rotation.y += delta;
    if (ringRef.current) ringRef.current.rotation.y += delta;
  });

  return (
    <group position={[14, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={surRef}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshStandardMaterial map={surfaceMap} />
      </mesh>

      <mesh ref={ringRef}>
        <ringGeometry args={[1.2, 2.1, 64]} />
        <meshStandardMaterial map={ringMap} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Saturn;
