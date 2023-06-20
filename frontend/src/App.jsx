import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import PingPage from "./pages/Ping";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ping" element={<PingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
