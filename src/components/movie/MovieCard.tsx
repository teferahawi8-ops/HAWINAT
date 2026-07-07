import { Heart, Star } from "lucide-react";
import type { Movie } from "../../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-gray-900
        shadow-lg
        transition-transform
        duration-500
        hover:scale-105
      "
    >
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="
          w-full
          h-[380px]
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
      />

      {/* Rating */}
      <div
        className="
          absolute
          top-3
          right-3
          flex
          items-center
          gap-1
          bg-black/70
          backdrop-blur-md
          px-3
          py-1
          rounded-full
        "
      >
        <Star
          size={16}
          className="text-yellow-400"
          fill="currentColor"
        />

        <span className="text-white text-sm font-semibold">
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      {/* Favorite Button */}
      <button
        className="
          absolute
          top-3
          left-3
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          bg-black/60
          p-3
          rounded-full
        "
      >
        <Heart
          size={22}
          className="text-red-500"
          fill="currentColor"
        />
      </button>

      {/* Movie Information */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-5
          text-white
        "
      >
        <h3 className="text-xl font-bold truncate">
          {movie.title}
        </h3>

        <p className="text-gray-300 text-sm mt-1">
          {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;