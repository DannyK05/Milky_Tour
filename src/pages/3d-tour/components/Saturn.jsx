import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { celestialBodies } from "../data";

const Saturn = () => {
  const [surfaceMap, ringMap] = useTexture([
    "/assets/textures/saturn/2k_saturn.jpg",
    "/assets/textures/saturn/2k_saturn_ring_alpha.png",
  ]);
  const surRef = useRef();
  const ringRef = useRef();
  const saturnRef = useRef();
  const angleRef = useRef(0);

  const orbitSpeed = celestialBodies.saturn.orbitSpeed;
  const orbitRadius = celestialBodies.saturn.orbitRadius;

  useFrame((state, delta) => {
    angleRef.current += orbitSpeed * delta;
    saturnRef.current.position.x = orbitRadius * Math.cos(angleRef.current);
    saturnRef.current.position.z = orbitRadius * Math.sin(angleRef.current);

    if (surRef.current)
      surRef.current.rotation.y += celestialBodies.saturn.rotationSpeed * delta;
    if (ringRef.current)
      ringRef.current.rotation.y +=
        celestialBodies.saturn.rotationSpeed * delta;
  });

  return (
    <group
      ref={saturnRef}
      position={[
        celestialBodies.saturn.position.x,
        celestialBodies.saturn.position.y,
        0,
      ]}
      scale={celestialBodies.saturn.scale}
      rotation={[Math.PI / 2, 0, 0]}
    >
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
