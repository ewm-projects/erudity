import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/Landing";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import PingPage from "./pages/Ping";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ping" element={<PingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

// import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// return (
//   <Router>
//     <Layout />
//     <Routes >
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/ping" element={<PingPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   </Router>
// );
