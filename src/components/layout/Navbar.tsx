import { Search, Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-4xl font-extrabold">
          <span className="text-pink-500">Hawi</span>
          <span className="text-purple-500">nat</span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-white font-medium">

          <li className="cursor-pointer hover:text-pink-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            Movies
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            TV Shows
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            Genres
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            My List
          </li>

        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white">

          <Search
            className="cursor-pointer hover:text-pink-500 transition"
            size={22}
          />

          <Bell
            className="cursor-pointer hover:text-pink-500 transition"
            size={22}
          />

          <User
            className="cursor-pointer hover:text-pink-500 transition"
            size={22}
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;