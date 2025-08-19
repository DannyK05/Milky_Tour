import { Canvas } from "@react-three/fiber";
import Layout from "../../components/layouts/Layout";
import Earth from "./components/Earth";
import Light from "./components/Light";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./components/Planet";
import Venus from "./components/Venus";
import Saturn from "./components/Saturn";
import { celestialBodies } from "./data";
import { useState } from "react";
import CameraController from "./components/CameraController";

const Render = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const spanLeft = () => setX(x - 1);
  const spanRight = () => setX(x + 1);

  const zoomIn = () => setY(y - 1);
  const zoomOut = () => setY(y + 1);
  console.log(y);
  return (
    <Layout>
      <div className="pt-10 w-full  h-[100vh] text-center bg-black">
        <Canvas
          camera={{ position: [0, 5, 15], fov: 45, near: 0.1, far: 1000 }}
        >
          {/* <CameraController x={x} y={y} /> */}
          <Stars radius={80} depth={300} count={10000} factor={2} fade />
          <Planet
            texture="/assets/textures/sun/2k_sun.jpg"
            size={celestialBodies.sun.scale}
            position={[
              celestialBodies.sun.position.x,
              celestialBodies.sun.position.y,
              0,
            ]}
            speed={celestialBodies.sun.rotationSpeed}
            orbitSpeed={celestialBodies.sun.orbitSpeed}
            orbitRadius={celestialBodies.sun.orbitRadius}
          />
          <Planet
            texture="/assets/textures/mercury/2k_mercury.jpg"
            size={celestialBodies.mercury.scale}
            position={[
              celestialBodies.mercury.position.x,
              celestialBodies.mercury.position.y,
              0,
            ]}
            speed={celestialBodies.mercury.rotationSpeed}
            orbitSpeed={celestialBodies.mercury.orbitSpeed}
            orbitRadius={celestialBodies.mercury.orbitRadius}
          />
          <Venus />
          <Earth />
          <Planet
            texture="/assets/textures/mars/2k_mars.jpg"
            size={celestialBodies.mars.scale}
            position={[
              celestialBodies.mars.position.x,
              celestialBodies.mars.position.y,
              0,
            ]}
            speed={celestialBodies.mars.rotationSpeed}
            orbitSpeed={celestialBodies.mars.orbitSpeed}
            orbitRadius={celestialBodies.mars.orbitRadius}
          />
          <Planet
            texture="/assets/textures/jupiter/2k_jupiter.jpg"
            size={celestialBodies.jupiter.scale}
            position={[
              celestialBodies.jupiter.position.x,
              celestialBodies.jupiter.position.y,
              0,
            ]}
            speed={celestialBodies.jupiter.rotationSpeed}
            orbitSpeed={celestialBodies.jupiter.orbitSpeed}
            orbitRadius={celestialBodies.jupiter.orbitRadius}
          />
          <Saturn />
          <Planet
            texture="/assets/textures/uranus/2k_uranus.jpg"
            size={celestialBodies.uranus.scale}
            position={[
              celestialBodies.uranus.position.x,
              celestialBodies.uranus.position.y,
              0,
            ]}
            speed={celestialBodies.uranus.rotationSpeed}
            orbitSpeed={celestialBodies.uranus.orbitSpeed}
            orbitRadius={celestialBodies.uranus.orbitRadius}
          />
          <Planet
            texture="/assets/textures/neptune/2k_neptune.jpg"
            size={celestialBodies.neptune.scale}
            position={[
              celestialBodies.neptune.position.x,
              celestialBodies.neptune.position.y,
              0,
            ]}
            speed={celestialBodies.neptune.rotationSpeed}
            orbitSpeed={celestialBodies.neptune.orbitSpeed}
            orbitRadius={celestialBodies.neptune.orbitRadius}
          />
          <Planet
            texture="/assets/textures/pluto/RS3_Pluto.webp"
            size={celestialBodies.pluto.scale}
            position={[
              celestialBodies.pluto.position.x,
              celestialBodies.pluto.position.y,
              0,
            ]}
            speed={celestialBodies.pluto.rotationSpeed}
            orbitSpeed={celestialBodies.pluto.orbitSpeed}
            orbitRadius={celestialBodies.pluto.orbitRadius}
          />
          <Light />
          <OrbitControls
            enablePan={true}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.5}
            zoomSpeed={0.6}
            autoRotate={false}
            autoRotateSpeed={0.25}
          />
        </Canvas>
        <div className="flex absolute bottom-10 items-center space-x-4 w-full">
          <span onClick={spanLeft} className="p-2 cursor-pointer bg-[#4E2A9B]">
            L
          </span>{" "}
          <span onClick={spanRight} className="p-2 cursor-pointer bg-[#4E2A9B]">
            R
          </span>
          <span onClick={zoomIn} className="p-2 cursor-pointer bg-[#4E2A9B]">
            +
          </span>
          <span onClick={zoomOut} className="p-2 cursor-pointer bg-[#4E2A9B]">
            -
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Render;
