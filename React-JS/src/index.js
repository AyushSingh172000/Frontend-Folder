import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css"

let div = document.querySelector("#root");
createRoot(div).render(<App></App>);
