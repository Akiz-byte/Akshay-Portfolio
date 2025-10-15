import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Removed App.css template usage; styles come from Tailwind index.css

createRoot(document.getElementById("root")!).render(<App />);
