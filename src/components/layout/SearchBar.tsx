import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { searchMovies } from "../../services/movieService";

import type { Movie } from "../../types/Movie";


const SearchBar = () => {


    const [query, setQuery] = useState("");

    const [results, setResults] = useState<Movie[]>([]);

    const [loading, setLoading] = useState(false);



    useEffect(() => {


        const timer = setTimeout(async () => {


            if(query.trim().length < 2){

                setResults([]);

                return;

            }


            try {


                setLoading(true);


                const data = await searchMovies(query);


                setResults(
                    data.slice(0,5)
                );


            } 
            catch(error){

                console.log(
                    "Search error:",
                    error
                );

                setResults([]);

            }
            finally{

                setLoading(false);

            }



        },500);



        return () => clearTimeout(timer);



    },[query]);





    const clearSearch = () => {

        setQuery("");

        setResults([]);

    };





    return (

        <div className="
            relative
            w-full
            max-w-md
        ">


            <div className="
                flex
                items-center
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-full
                px-4
                py-3
            ">


                <Search
                    size={22}
                    className="text-gray-300"
                />



                <input


                    value={query}


                    onChange={(e)=>
                        setQuery(e.target.value)
                    }


                    placeholder="Search movies..."


                    className="
                    bg-transparent
                    outline-none
                    text-white
                    ml-4
                    w-full
                    placeholder-gray-400
                    "


                />



                {
                    query.length > 0 && (

                        <button
                            onClick={clearSearch}
                        >

                            <X
                                size={20}
                                className="text-gray-300"
                            />

                        </button>

                    )
                }



            </div>





            <AnimatePresence>


            {

                results.length > 0 && (


                    <motion.div


                        initial={{
                            opacity:0,
                            y:-20
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        exit={{
                            opacity:0,
                            y:-20
                        }}



                        transition={{
                            duration:0.3
                        }}



                        className="
                        absolute
                        top-16
                        left-0
                        w-full
                        bg-black/90
                        backdrop-blur-xl
                        rounded-2xl
                        overflow-hidden
                        border
                        border-white/10
                        z-50
                        "


                    >



                    {
                        results.map((movie)=>(


                            <motion.div


                                key={movie.id}


                                whileHover={{
                                    scale:1.02
                                }}


                                className="
                                flex
                                items-center
                                gap-4
                                p-4
                                hover:bg-white/10
                                cursor-pointer
                                transition
                                "


                            >



                                <img


                                    src={
                                        movie.poster_path
                                        ?
                                        `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                        :
                                        "/no-image.png"
                                    }


                                    alt={movie.title}


                                    className="
                                    w-12
                                    h-16
                                    object-cover
                                    rounded
                                    "


                                />



                                <div className="text-white">


                                    <h3 className="font-semibold">


                                        {movie.title}


                                    </h3>



                                    <p className="text-sm text-gray-400">


                                        ⭐ {movie.vote_average.toFixed(1)}


                                    </p>



                                </div>



                            </motion.div>


                        ))
                    }



                    </motion.div>


                )


            }


            </AnimatePresence>




            {
                loading && (

                    <div className="
                        absolute
                        top-16
                        text-white
                        bg-black/80
                        p-3
                        rounded-xl
                    ">

                        Searching...

                    </div>

                )
            }



        </div>


    );


};


export default SearchBar;