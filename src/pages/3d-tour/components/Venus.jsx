import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { celestialBodies } from "../data";

const Venus = () => {
  const [surfaceMap, atmosphereMap] = useTexture([
    "/assets/textures/venus/2k_venus_surface.jpg",
    "/assets/textures/earth/2k_earth_daymap.jpg",
  ]);
  const surRef = useRef();
  const atmosRef = useRef();
  const venusRef = useRef();
  const angleRef = useRef(0);

  const rotationSpeed = celestialBodies.venus.rotationSpeed;
  const orbitSpeed = celestialBodies.venus.orbitSpeed;
  const orbitRadius = celestialBodies.venus.orbitRadius;

  surfaceMap.colorSpace = THREE.SRGBColorSpace;
  atmosphereMap.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    angleRef.current += orbitSpeed * delta;
    venusRef.current.position.x = orbitRadius * Math.cos(angleRef.current);
    venusRef.current.position.z = orbitRadius * Math.sin(angleRef.current);

    if (surRef.current) surRef.current.rotation.y += delta * rotationSpeed;
    if (atmosRef.current)
      atmosRef.current.rotation.y += delta * rotationSpeed * 0.4;
  });

  return (
    <group
      position={[
        celestialBodies.venus.position.x,
        celestialBodies.venus.position.y,
        0,
      ]}
      scale={celestialBodies.venus.scale}
      ref={venusRef}
    >
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
