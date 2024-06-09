"use strict";

import { useMemo } from "react";

/**
 * Custom hook that provides a mapping of movement actions to keyboard keys.
 *
 * @returns {Array} Array of movement mappings, where each mapping contains a name and associated keys.
 */
export default function useMovements() {
  // Define movement action names
  const MOVEMENTS = {
    forward: "forward",
    backward: "backward",
    leftward: "leftward",
    rightward: "rightward",
    jump: "jump",
    exit: "exit",
    run: "run",
  };

  // Use useMemo to create a memoized array of key mappings
  const map = useMemo(() => {
    return [
      { name: MOVEMENTS.forward, keys: ["KeyW", "ArrowUp"] },
      { name: MOVEMENTS.backward, keys: ["KeyS", "ArrowDown"] },
      { name: MOVEMENTS.leftward, keys: ["KeyA", "ArrowLeft"] },
      { name: MOVEMENTS.rightward, keys: ["KeyD", "ArrowRight"] },
      { name: MOVEMENTS.jump, keys: ["Space"] },
      { name: MOVEMENTS.exit, keys: ["Escape"] },
      { name: MOVEMENTS.run, keys: ["Shift"] },
    ];
  }, []);

  return map;
}
