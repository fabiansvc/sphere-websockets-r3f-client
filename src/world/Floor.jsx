import { RigidBody } from "@react-three/rapier";

/**
 * Floor component creates a static floor in a 3D scene.
 * It uses a fixed rigid body to ensure it does not move.
 *
 * @component
 * @returns {JSX.Element} The Floor component.
 */
export default function Floor() {
  return (
    <RigidBody type="fixed">
      <mesh rotation-x={-Math.PI}>
        <boxGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial color={0x635366} roughness={0} metalness={0.5} />
      </mesh>
    </RigidBody>
  );
}
