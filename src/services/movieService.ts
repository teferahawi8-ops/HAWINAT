import tmdb from "../api/tmdb";
import type { Movie } from "../types/Movie";



export const getTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/week");

  return response.data.results;
};


export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular");

  return response.data.results;
};


export const getTopRatedMovies = async () => {
  const response = await tmdb.get("/movie/top_rated");

  return response.data.results;
};
export const searchMovies = async (
  query:string
):Promise<Movie[]> => {

  try {

    const response = await tmdb.get("/search/movie",{

      params:{
        query:query
      }

    });


    return response.data.results;


  } catch(error){

    console.log(
      "SEARCH ERROR:",
      error
    );

    return [];

  }

};