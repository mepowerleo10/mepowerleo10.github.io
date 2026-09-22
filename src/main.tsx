import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initOpenObserveRum } from "./lib/openobserve.ts";

initOpenObserveRum();
createRoot(document.getElementById("root")!).render(<App />);
