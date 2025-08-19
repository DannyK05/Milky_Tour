import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";
import { celestialBodies } from "../data";

const Earth = () => {
  const dayRef = useRef();
  const nightRef = useRef();
  const cloudsRef = useRef();
  const earthRef = useRef();
  const angleRef = useRef(0);

  const rotationSpeed = celestialBodies.earth.rotationSpeed;
  const orbitSpeed = celestialBodies.earth.orbitSpeed;
  const orbitRadius = celestialBodies.earth.orbitRadius;

  useFrame((_, delta) => {
    angleRef.current += orbitSpeed * delta;
    earthRef.current.position.x = orbitRadius * Math.cos(angleRef.current);
    earthRef.current.position.z = orbitRadius * Math.sin(angleRef.current);

    if (dayRef.current) dayRef.current.rotation.y += rotationSpeed * delta;
    if (cloudsRef.current)
      cloudsRef.current.rotation.y += rotationSpeed * 1.2 * delta;
    if (nightRef.current) nightRef.current.rotation.y += rotationSpeed * delta;
  });

  const [dayMap, normalMap, specular, cloudsMap, nightMap] = useTexture([
    "/assets/textures/earth/2k_earth_daymap.jpg",
    "/assets/textures/earth/2k_earth_normal_map.webp",
    "/assets/textures/earth/2k_earth_specular_map.webp",
    "/assets/textures/earth/2k_earth_clouds.jpg",
    "/assets/textures/earth/2k_earth_nightmap.jpg",
  ]);

  dayMap.colorSpace = THREE.SRGBColorSpace;
  cloudsMap.colorSpace = THREE.SRGBColorSpace;
  nightMap.colorSpace = THREE.SRGBColorSpace;

  return (
    <group
      position={[
        celestialBodies.earth.position.x,
        celestialBodies.earth.position.y,
        0,
      ]}
      scale={celestialBodies.earth.scale}
      ref={earthRef}
    >
      <mesh ref={dayRef}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          roughnessMap={specular}
          metalness={0}
        />
      </mesh>

      <mesh ref={nightRef}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshBasicMaterial
          map={nightMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </mesh>

      <mesh ref={cloudsRef} scale={1.02}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </mesh>

      <mesh scale={1.01}>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshBasicMaterial
          color="#306697"
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default Earth;
