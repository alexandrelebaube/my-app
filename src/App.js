import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/about";
import HomePage from "./Pages/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
