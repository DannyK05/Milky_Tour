import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Layout from "../../components/layouts/Layout";
import Earth from "./components/Earth";
import Light from "./components/Light";
import Planet from "./components/Planet";
import Venus from "./components/Venus";
import Saturn from "./components/Saturn";
// import KeyboardController from "./components/KeyboardController";

import { celestialBodies } from "./data";

const Render = () => {
  const [showTip, setShowTip] = useState(true);

  const toggleShowTip = () => {
    setShowTip(!showTip);
  };
  return (
    <Layout>
      <div
        onClick={toggleShowTip}
        className="absolute cursor-pointer z-10 top-10 flex items-start bg-[#FFFFFF77] backdrop-blur-md p-1 space-y-1 flex-col"
      >
        <h2 className="underline text-center w-full active:hover:p-1 lg:hover:p-1">
          Navigation
        </h2>
        {showTip ? (
          <>
            <p className="flex items-start space-x-1">
              <span className="font-bold text-[#4E2A9A]">Move around:</span>
              <span className="lg:hidden">Swipe on your screen</span>

              <span className="hidden md:hidden lg:block">
                Hold down left key and scroll your mouse
              </span>
            </p>

            <p className="flex items-start space-x-1">
              <span className="font-bold text-[#4E2A9A]">
                Zoom in/Zoom out:
              </span>
              <span className="lg:hidden">
                Pinch or spread your fingers on your screen
              </span>

              <span className="hidden md:hidden lg:block">
                Scroll the mouse wheel / <br /> Pinch or spread your fingers on
                trackpad
              </span>
            </p>

            <p className="flex items-start justify-start space-x-1">
              <span className="font-bold text-[#4E2A9A]">Pan Left/Right:</span>
              <span className="lg:hidden">Swipe with double fingers</span>
              <span className="hidden md:hidden lg:block">
                Hold down right key and scroll mouse pad
              </span>
            </p>
            <span className="text-xs text-[#4E2A9A] font-bold grotesk w-full text-center">
              Tap/Click to close
            </span>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="pt-10 w-full h-[100vh] text-center bg-black">
        <Canvas
          camera={{ position: [0, 5, 15], fov: 45, near: 0.1, far: 1000 }}
        >
          {/* <KeyboardController /> */}
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
            texture="/assets/textures/mercury/2k_mercury.webp"
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
      </div>
    </Layout>
  );
};

export default Render;
