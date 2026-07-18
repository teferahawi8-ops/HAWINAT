import  tmdb  from "../api/tmdb";
import type { Movie, Video } from "../types/Movie";

// =============================
// Trending Movies
// =============================
export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdb.get("/trending/movie/week");
    return response.data.results;
  } catch (error) {
    console.log("Trending Error:", error);
    return [];
  }
};

// =============================
// Popular Movies
// =============================
export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdb.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.log("Popular Error:", error);
    return [];
  }
};

// =============================
// Top Rated Movies
// =============================
export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdb.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    console.log("Top Rated Error:", error);
    return [];
  }
};

// =============================
// Search Movies
// =============================
export const searchMovies = async (
  query: string
): Promise<Movie[]> => {
  try {
    const response = await tmdb.get("/search/movie", {
      params: {
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log("Search Error:", error);
    return [];
  }
};

// =============================
// Movie Details
// =============================
export const getMovieDetails = async (
  id: number
): Promise<Movie> => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

// =============================
// Movie Trailer
// =============================
export const getMovieTrailer = async (
  id: number
): Promise<Video | null> => {
  try {
    const response = await tmdb.get(`/movie/${id}/videos`);

    const trailer = response.data.results.find(
      (video: Video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

    return trailer || null;
  } catch (error) {
    console.log("Trailer Error:", error);
    return null;
  }
};