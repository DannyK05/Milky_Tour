import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Venus = () => {
  const [surfaceMap, atmosphereMap] = useTexture([
    "/assets/textures/venus/2k_venus_surface.jpg",
    "/assets/textures/earth/2k_earth_daymap.jpg",
  ]);
  const surRef = useRef();
  const atmosRef = useRef();

  const rotationSpeed = -0.00041;
  useFrame((state, delta) => {
    if (surRef.current) surRef.current.rotation.y += delta * rotationSpeed;
    if (atmosRef.current)
      atmosRef.current.rotation.y += delta * rotationSpeed * 0.4;
  });

  return (
    <group position={[6, 0, 0]}>
      <mesh ref={surRef}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshStandardMaterial map={surfaceMap} />
      </mesh>

      <mesh ref={atmosRef}>
        <icosahedronGeometry scale={1.05} args={[1, 16]} />{" "}
        <meshStandardMaterial
          map={atmosphereMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Venus;
