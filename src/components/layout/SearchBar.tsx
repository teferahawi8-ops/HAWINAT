import { Search } from "lucide-react";

const SearchBar = () => {

  return (

    <div className="max-w-6xl mx-auto -mt-16 relative z-30">

      <div
        className="
          bg-gray-900
          rounded-full
          px-8
          py-5
          flex
          items-center
          shadow-2xl
        "
      >

        <Search
          size={24}
          className="text-pink-400"
        />

        <input
          type="text"
          placeholder="Search movies, TV shows..."
          className="
            bg-transparent
            outline-none
            text-white
            ml-4
            w-full
          "
        />

      </div>

    </div>

  );
};

export default SearchBar;