import "./styles.css";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";

/**
 * Entry point for the React application.
 * It sets up the rendering of the Experience component.
 *
 * @file
 */

/**
 * Renders the Experience component into the root DOM node.
 */
createRoot(document.getElementById("root")).render(<Experience />);
