import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example1" element={<Example1 />} />
      <Route path="/example2" element={<Example2 />} />
      <Route path="/example3" element={<Example3 />} />
    </Routes>
  );
}

export default App;
