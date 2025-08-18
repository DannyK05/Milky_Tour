import { Canvas, useFrame } from "@react-three/fiber";
import Layout from "../../components/layouts/Layout";
import Earth from "./components/Earth";
import Light from "./components/Light";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./components/Planet";
import { useRef } from "react";
import Venus from "./components/Venus";
import Saturn from "./components/Saturn";

const Render = () => {
  return (
    <Layout>
      <div className="pt-10 w-full  h-[100vh] text-center bg-black">
        <Canvas
          camera={{ position: [0, 5, 15], fov: 45, near: 0.1, far: 1000 }}
        >
          <Stars radius={80} depth={60} count={8000} factor={2} fade />

          <Planet
            texture="/assets/textures/sun/2k_sun.jpg"
            size={2}
            position={[0, 0, 0]}
            speed={0}
          />

          <Planet
            texture="/assets/textures/mercury/2k_mercury.jpg"
            size={0.5}
            position={[4, 0, 0]}
            speed={0.0017}
          />

          <Venus />

          <Earth />

          <Planet
            texture="/assets/textures/mars/2k_mars.jpg"
            size={0.5}
            position={[10, 0, 0]}
            speed={0.0972}
          />

          <Planet
            texture="/assets/textures/jupiter/2k_jupiter.jpg"
            size={0.5}
            position={[12, 0, 0]}
            speed={0.02411}
          />

          <Saturn />

          <Planet
            texture="/assets/textures/uranus/2k_uranus.jpg"
            size={0.5}
            position={[16, 0, 0]}
            speed={-0.1388}
          />
          <Planet
            texture="/assets/textures/neptune/2k_neptune.jpg"
            size={0.5}
            position={[18, 0, 0]}
            speed={0.1486}
          />

          <Planet
            texture="/assets/textures/pluto/RS3_Pluto.webp"
            size={0.5}
            position={[20, 0, 0]}
            speed={-0.0156}
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
