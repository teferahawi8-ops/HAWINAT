import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20 px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;