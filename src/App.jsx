import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search/Search";
import createContext from "../src/hooks/newThemecontext";
const App = () => {
  const { mode } = createContext();
  return (
    <div className={`App ${mode === "dark" ? "dark-mode" : ""}`}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
