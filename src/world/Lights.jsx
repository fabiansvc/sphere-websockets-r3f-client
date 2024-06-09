import { Stars } from "@react-three/drei";

/**
 * Lights component sets up the lighting and environmental effects
 * in a 3D scene. It includes ambient and directional lights, as well
 * as a starry sky background.
 *
 * @component
 * @returns {JSX.Element} The Lights component.
 */
export default function Lights() {
  return (
    <>
      {/* Ambient light providing general illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light simulating sunlight */}
      <directionalLight position={[-10, 20, 10]} intensity={1.5} />

      {/* Starry sky background */}
      <Stars />
    </>
  );
}
