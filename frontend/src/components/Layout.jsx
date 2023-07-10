import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <Navbar />
      <main className="w-screen h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
