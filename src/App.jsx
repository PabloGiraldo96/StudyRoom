import { Canvas } from "@react-three/fiber";

import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { RoomExperience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 70,
        position: [-9, 12, 9],
      }}
    >
      <ScrollControls />
      <RoomExperience />
    </Canvas>
  );
}

export default App;
