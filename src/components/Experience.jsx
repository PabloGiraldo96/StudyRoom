/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { PCRoom } from "./myRoom";

export const RoomExperience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <directionalLight intensity={2} position={[1, 5, 5]} castShadow />
      <ScrollControls pages={1} damping={2} />
      <PCRoom />
    </>
  );
};
