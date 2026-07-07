import Navbar from "../../components/layout/Navbar";
import HeroBanner from "../../components/layout/HeroBanner";
import SearchBar from "../../components/layout/SearchBar";

import { useEffect, useState } from "react";
import MovieSection from "../../components/movie/MovieSection";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../../services/movieService";

import type { Movie } from "../../types/Movie";

const Home = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const trendingData = await getTrendingMovies();
      const popularData = await getPopularMovies();
      const topRatedData = await getTopRatedMovies();

      setTrending(trendingData);
      setPopular(popularData);
      setTopRated(topRatedData);
    };

    loadMovies();
  }, []);

  return (
    <>
  <Navbar />

  <HeroBanner />

  <SearchBar />

  <main className="bg-[#0B0F19] min-h-screen px-8 pt-16">

    {/* Movie Sections */}

    <MovieSection
      title=" Trending This Week"
      movies={trending}
    />

    <MovieSection
      title=" Popular Movies"
      movies={popular}
    />

    <MovieSection
      title="Top Rated Movies"
      movies={topRated}
    />

  </main>

</>
  );
};

export default Home;