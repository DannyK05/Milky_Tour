import { Canvas } from "@react-three/fiber";
import Layout from "../../components/layouts/Layout";
import Earth from "./components/Earth";
import Light from "./components/Light";
import { Environment, OrbitControls, Stars } from "@react-three/drei";

const Render = () => {
  return (
    <Layout>
      <div className="pt-10 w-full  h-[100vh] text-center bg-black">
        <Canvas camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 1000 }}>
          <Environment preset="sunset" />
          <Stars radius={80} depth={60} count={8000} factor={2} fade />
          <Earth />
          <Light />
          <OrbitControls
            enablePan={false}
            maxDistance={6}
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
