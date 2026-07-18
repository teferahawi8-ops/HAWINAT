import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  Calendar,
  Clock,
  Play,
  Heart,
  Globe,
} from "lucide-react";

import type { Movie } from "../../types/Movie";
import { getMovieDetails, getMovieTrailer } from "../../services/movieService";
import TrailerModal from "../../components/movie/TrailerModal";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [openTrailer, setOpenTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMovie = async () => {
      const data = await getMovieDetails(Number(id));
      setMovie(data);
    };

    loadMovie();
  }, [id]);

  const playTrailer = async () => {
    if (!id) return;

    const trailer = await getMovieTrailer(Number(id));

    if (trailer) {
      setTrailerKey(trailer.key);
      setOpenTrailer(true);
    } else {
      alert("Trailer not available.");
    }
  };

  if (!movie) {
    return (
      <div
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
      >
        Loading Movie...
      </div>
    );
  }

  return (
    <main
      className="
        bg-black
        min-h-screen
        text-white
      "
    >
      {/* HERO */}
      <section
        className="
          relative
          h-[90vh]
          overflow-hidden
        "
      >
        {/* Background */}
        <motion.img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/70
            to-black/20
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            h-full
            max-w-7xl
            mx-auto
            flex
            items-end
            gap-10
            px-8
            pb-16
          "
        >
          {/* Poster */}
          <motion.img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="
              w-64
              rounded-2xl
              shadow-2xl
            "
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Movie Info */}
          <div className="max-w-3xl">
            <h1 className="text-6xl font-black mb-4">
              {movie.title}
            </h1>

            {/* Rating / Year / Runtime */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-6
                mb-5
              "
            >
              <span className="flex items-center gap-2">
                <Star
                  size={20}
                  className="text-yellow-400"
                  fill="currentColor"
                />
                {movie.vote_average.toFixed(1)}
              </span>

              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {movie.release_date?.slice(0, 4)}
              </span>

              {movie.runtime && (
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {movie.runtime} min
                </span>
              )}

              {movie.spoken_languages?.[0] && (
                <span className="flex items-center gap-2">
                  <Globe size={18} />
                  {movie.spoken_languages[0].english_name}
                </span>
              )}
            </div>

            {/* Genres */}
            <div
              className="
                flex
                flex-wrap
                gap-3
                mb-6
              "
            >
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="
                    bg-pink-600/20
                    border
                    border-pink-500
                    px-4
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p
              className="
                text-gray-300
                leading-7
                mb-8
              "
            >
              {movie.overview}
            </p>

            {/* Buttons */}
            <div className="flex gap-5">
              <button
                onClick={playTrailer}
                className="
                  flex
                  items-center
                  gap-2
                  bg-pink-600
                  px-7
                  py-3
                  rounded-xl
                  hover:bg-pink-700
                  transition
                "
              >
                <Play size={20} />
                Watch Trailer
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  bg-white/10
                  backdrop-blur-md
                  px-7
                  py-3
                  rounded-xl
                  hover:bg-white/20
                  transition
                "
              >
                <Heart size={20} />
                Favorite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      <TrailerModal
        open={openTrailer}
        trailerKey={trailerKey}
        onClose={() => setOpenTrailer(false)}
      />
    </main>
  );
};

export default MovieDetails;