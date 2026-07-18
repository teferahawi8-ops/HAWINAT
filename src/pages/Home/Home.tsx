import Navbar from "../../components/layout/Navbar";
import HeroBanner from "../../components/layout/HeroBanner";

import { useEffect, useState } from "react";
import MovieSection from "../../components/movie/MovieSection";
import SearchBar from "../../components/layout/SearchBar";

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
            <div className="px-8 mt-10">
    <SearchBar />
</div>


            <MovieSection
                title="Trending This Week"
                movies={trending}
            />


            <MovieSection
                title="Popular Movies"
                movies={popular}
            />


            <MovieSection
                title="Top Rated Movies"
                movies={topRated}
            />


        </>

    );

};


export default Home;