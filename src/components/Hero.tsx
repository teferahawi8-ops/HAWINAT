import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tmdb from "../api/tmdb";
import "./Hero.css";


const imageURL = "https://image.tmdb.org/t/p/original";


interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    genre_ids: number[];
}



function Hero() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [current, setCurrent] = useState(0);


    // Fetch movies from TMDB

    useEffect(() => {

        async function fetchMovies() {

            try {

                const response = await tmdb.get("/movie/popular");

                setMovies(response.data.results.slice(0, 10));

            } 
            catch(error) {

                console.log("Error fetching movies:", error);

            }

        }


        fetchMovies();


    }, []);



    // Change movie every 7 seconds

    useEffect(() => {


        if (movies.length === 0) return;


        const timer = setInterval(() => {


            setCurrent((prev) => 
                (prev + 1) % movies.length
            );


        },7000);



        return () => clearInterval(timer);


    }, [movies]);



    if(movies.length === 0){

        return <div>Loading movies...</div>;

    }



    const movie = movies[current];



    return (

        <section className="hero">


            <AnimatePresence mode="wait">


                <motion.img

                    key={movie.id}

                    src={
                        imageURL + movie.backdrop_path
                    }

                    className="hero-image"


                    initial={{
                        opacity:0
                    }}


                    animate={{
                        opacity:1
                    }}


                    exit={{
                        opacity:0
                    }}


                    transition={{
                        duration:1
                    }}

                />


            </AnimatePresence>



            <div className="overlay"></div>



            <div className="content">


                <motion.h1

                    key={movie.title}

                    initial={{
                        x:-100,
                        opacity:0
                    }}

                    animate={{
                        x:0,
                        opacity:1
                    }}

                    transition={{
                        duration:0.8
                    }}

                >

                    {movie.title}

                </motion.h1>




                <motion.div

                    className="rating"

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        delay:0.3
                    }}

                >

                    ⭐ {movie.vote_average.toFixed(1)}

                </motion.div>




                <motion.p

                    key={movie.overview}

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        delay:0.5
                    }}

                >

                    {movie.overview}

                </motion.p>




                <motion.button

                    whileHover={{
                        scale:1.1
                    }}

                    whileTap={{
                        scale:0.9
                    }}

                >

                    ▶ Watch Now

                </motion.button>



            </div>



        </section>

    );

}


export default Hero;