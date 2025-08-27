import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const KeyboardController = () => {
  const { camera } = useThree();

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "+":
        camera.zoom += 0.01;
        camera.updateProjectionMatrix();
        break;

      case "-":
        camera.zoom -= 0.01;
        camera.updateProjectionMatrix();
        break;

      case "ArrowLeft":
      case "a":
        camera.position.x -= 0.5;
        break;

      case "ArrowRight":
      case "d":
        camera.position.x += 0.5;
        break;

      case "ArrowUp":
      case "w":
        camera.position.y += 0.5;
        break;

      case "ArrowDown":
      case "s":
        camera.position.y -= 0.5;
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [camera]);

  return null;
};

export default KeyboardController;
