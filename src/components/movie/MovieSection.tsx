import MovieCard from "./MovieCard";
import type { Movie } from "../../types/Movie";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection = ({ title, movies }: MovieSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-white text-3xl font-bold mb-6">
        {title}
      </h2>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        "
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;