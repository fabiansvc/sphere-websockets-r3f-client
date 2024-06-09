import { Canvas } from "@react-three/fiber";
import Player1 from "./world/Player1";
import Floor from "./world/Floor";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { KeyboardControls, Loader } from "@react-three/drei";
import useMovements from "./utils/key-movements";
import Lights from "./world/Lights";
import Player2 from "./world/Player2";

/**
 * Experience component sets up the 3D scene, including lighting,
 * physics, and player characters. It uses React Three Fiber for rendering,
 * Rapier for physics, and Drei for additional utilities.
 *
 * @component
 * @returns {JSX.Element} The Experience component.
 */
const Experience = () => {
  const map = useMovements();

  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <KeyboardControls map={map}>
          <Lights />
          <Physics debug={false} timeStep="vary">
            <Floor />
            <Player1 />
            <Player2 />
          </Physics>
        </KeyboardControls>
      </Canvas>
    </Suspense>
  );
};

export default Experience;
