import { genres } from "../../constants/genres";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Star,
  Play,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getTrendingMovies } from "../../services/movieService";
import type { Movie } from "../../types/Movie";


const HeroBanner = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState(0);



  // Load movies
  useEffect(() => {

    const loadMovies = async () => {

      const data = await getTrendingMovies();

      setMovies(data);

    };


    loadMovies();

  }, []);




  // Auto change movie every 7 seconds
  useEffect(() => {

    if (movies.length === 0) return;


    const timer = setInterval(() => {

      setIndex((prev) =>
        (prev + 1) % movies.length
      );

    }, 7000);



    return () => clearInterval(timer);


  }, [movies]);





  if (movies.length === 0) {

    return (

      <div
        className="
          h-screen
          bg-black
        "
      />

    );

  }




  const movie = movies[index];





  // Next movie
  const nextMovie = () => {

    setIndex((prev) =>
      (prev + 1) % movies.length
    );

  };





  // Previous movie
  const previousMovie = () => {

    setIndex((prev) =>
      prev === 0
      ? movies.length - 1
      : prev - 1
    );

  };





  return (

    <section
      className="
        relative
        h-[90vh]
        overflow-hidden
      "
    >


      {/* Background Image */}

      <AnimatePresence mode="wait">

        <motion.img

          key={movie.id}

          src={
            movie.backdrop_path
            ?
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            :
            "/fallback.jpg"
          }


          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "


          initial={{
            opacity:0,
            scale:1.1
          }}


          animate={{
            opacity:1,
            scale:1.05
          }}


          exit={{
            opacity:0
          }}


          transition={{
            duration:3
          }}

        />

      </AnimatePresence>





      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/70
          to-transparent
        "
      />







      {/* Movie Content */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          h-full
          flex
          items-center
          px-8
        "
      >


        <AnimatePresence mode="wait">


          <motion.div


            key={movie.id}


            initial={{
              opacity:0,
              y:20
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
              duration:0.6
            }}



            className="
              max-w-xl
              text-white
            "

          >



            <p
              className="
                text-pink-400
                uppercase
                tracking-widest
                mb-4
              "
            >

              Trending Now

            </p>





            <h1
              className="
                text-6xl
                font-black
                mb-5
              "
            >

              {movie.title}

            </h1>






            {/* Movie Information */}

            <div
              className="
                flex
                items-center
                gap-5
                mb-5
                flex-wrap
              "
            >


              {/* Rating */}

              <span
                className="
                  flex
                  items-center
                  gap-1
                "
              >

                <Star
                  size={20}
                  className="text-yellow-400"
                  fill="currentColor"
                />

                {movie.vote_average.toFixed(1)}

              </span>





              {/* Year */}

              <span>

                📅 {movie.release_date?.slice(0,4)}

              </span>






              {/* Genres */}

              <span>

                🎭{" "}

                {
                  movie.genre_ids
                  ?.slice(0,2)
                  .map(id => genres[id])
                  .join(" • ")
                }

              </span>


            </div>







            {/* Overview */}

            <p
              className="
                text-gray-300
                leading-7
                mb-8
                line-clamp-3
                min-h-[84px]
              "
            >

              {movie.overview}

            </p>







            {/* Buttons */}

            <div
              className="
                flex
                gap-5
              "
            >


              <button

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

                <Play size={20}/>

                Watch Now

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
                "

              >

                <Info size={20}/>

                More Info

              </button>



            </div>



          </motion.div>


        </AnimatePresence>



      </div>








      {/* Slide Indicators */}

      <div

        className="
          absolute
          right-8
          top-1/2
          -translate-y-1/2
          z-20
          flex
          flex-col
          gap-3
        "

      >


        {
          movies
          .slice(0,5)
          .map((_,i)=>(


            <button

              key={i}

              onClick={() => setIndex(i)}


              className={`
                w-3
                h-3
                rounded-full
                transition

                ${
                  index === i
                  ?
                  "bg-pink-500 scale-125"
                  :
                  "bg-white/40"
                }

              `}

            />


          ))

        }


      </div>








      {/* Previous / Next Controls */}

      <div

        className="
          absolute
          right-8
          bottom-20
          z-20
          flex
          gap-4
        "

      >



        <button

          onClick={previousMovie}

          className="
            bg-white/10
            backdrop-blur-md
            text-white
            p-3
            rounded-full
            hover:bg-white/20
            transition
          "

        >

          <ChevronLeft size={28}/>


        </button>







        <button

          onClick={nextMovie}

          className="
            bg-pink-600
            text-white
            p-3
            rounded-full
            hover:bg-pink-700
            transition
          "

        >

          <ChevronRight size={28}/>


        </button>




      </div>




    </section>

  );

};


export default HeroBanner;