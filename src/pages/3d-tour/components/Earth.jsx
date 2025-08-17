import { useTexture } from "@react-three/drei";

import * as THREE from "three";

const Earth = () => {
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
    <group>
      <mesh>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          roughnessMap={specular}
          metalness={0}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1, 16]} />{" "}
        <meshBasicMaterial
          map={nightMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </mesh>

      <mesh scale={1.02}>
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
          color="#4698ebff"
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
