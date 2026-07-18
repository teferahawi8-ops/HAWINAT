import { Heart } from "lucide-react";
import { useFavorites } from "../../context/FavoriteContext";
import MovieCard from "../../components/movie/MovieCard";


const Favorites = () => {


  const { favorites } = useFavorites();



  return (

    <div className="min-h-screen bg-black text-white px-6 py-10">


      {/* Title */}

      <div className="flex items-center gap-3 mb-8">

        <Heart
          size={32}
          className="text-red-500"
          fill="currentColor"
        />

        <h1 className="text-3xl font-bold">
          My Favorite Movies
        </h1>

      </div>




      {/* Empty State */}

      {favorites.length === 0 && (

        <div className="text-center py-20">

          <Heart
            size={60}
            className="mx-auto text-gray-600"
          />

          <h2 className="text-2xl font-semibold mt-5">
            No Favorite Movies Yet
          </h2>


          <p className="text-gray-400 mt-2">
            Click the heart icon on movies to add them here.
          </p>

        </div>

      )}




      {/* Movies Grid */}

      {favorites.length > 0 && (

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          "
        >

          {favorites.map((movie)=>(

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      )}



    </div>

  );

};


export default Favorites;