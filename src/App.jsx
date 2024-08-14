import { Canvas } from "@react-three/fiber";

import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { RoomExperience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 80,
        position: [5, 12, 1],
      }}
    >
      <ScrollControls />
      <RoomExperience />
    </Canvas>
  );
}

export default App;
