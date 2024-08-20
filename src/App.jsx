/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
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
      <Suspense fallback={null}>
        <ScrollControls />
        <RoomExperience />
      </Suspense>
    </Canvas>
  );
}

export default App;
