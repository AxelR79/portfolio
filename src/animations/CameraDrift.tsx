import { useFrame } from "@react-three/fiber";

const CameraDrift = () => {
  useFrame(({ camera }) => {
    const time = performance.now() * 0.00005; // Temps en secondes
    camera.position.x = Math.sin(time) * 10; // Rotation lente sur X
    camera.position.z = Math.cos(time) * 10; // Rotation lente sur Z
    camera.lookAt(0, 0, 0); // Toujours regarder le centre
  });
  return null;
};

export default CameraDrift;
