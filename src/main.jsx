import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Usecontextprovider } from "./context/newContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Usecontextprovider>
    <App />
  </Usecontextprovider>
);
