import AnimatedBackground from "./components/AnimatedBackground";
import AnimatedText from "./components/AnimatedText";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <AnimatedBackground />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatedText />
      </div>
    </div>
  );
};

export default App;
