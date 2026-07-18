export interface Genre {
  id: number;
  name: string;
}


export interface Language {
  english_name: string;
}


export interface Movie {

  id: number;

  title: string;

  overview: string;

  poster_path: string;

  backdrop_path: string;

  vote_average: number;

  release_date: string;


  // For Trending / Popular / Search
  genre_ids?: number[];


  // For Movie Details
  genres?: Genre[];


  runtime?: number;


  tagline?: string;


  spoken_languages?: Language[];


  popularity?: number;


  vote_count?: number;

}
export interface Video {

  key: string;

  name: string;

  site: string;

  type: string;

}