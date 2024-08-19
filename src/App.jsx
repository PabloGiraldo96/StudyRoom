import { Canvas } from "@react-three/fiber";

import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { RoomExperience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 90,
        position: [5, 18, 1],
      }}
    >
      <ScrollControls />
      <RoomExperience />
    </Canvas>
  );
}

export default App;
