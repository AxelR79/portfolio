import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import CameraDrift from "../animations/CameraDrift";

const AnimatedBackground = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas>
        <Stars
          radius={100} // Rayon de l'espace
          depth={80} // Profondeur étendue pour un effet immersif
          count={5000} // Nombre d'étoiles
          factor={8} // Taille des étoiles
          saturation={0} // Désaturation des couleurs
          fade // Animation douce des étoiles
          speed={2} // Vitesse du clignotement
        />
        <CameraDrift />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
