const HeroBanner = () => {

  return (

    <section
      className="
        relative
        h-[90vh]
        flex
        items-center
        px-16
        bg-gradient-to-r
        from-black
        to-gray-900
      "
    >

      <div className="max-w-xl z-20">

        <p className="text-pink-400 uppercase tracking-widest">
          Trending Now
        </p>

        <h1 className="text-7xl font-black text-white mt-3">
          Hawinat
        </h1>

        <p className="text-gray-300 mt-6 leading-8">

          Discover thousands of movies and TV shows
          with an immersive cinematic experience.

        </p>

        <div className="flex gap-5 mt-10">

          <button
            className="
              bg-pink-500
              px-8
              py-4
              rounded-xl
              text-white
              font-bold
              hover:bg-pink-600
              transition
            "
          >
            ▶ Watch Now
          </button>

          <button
            className="
              bg-white/10
              backdrop-blur-md
              px-8
              py-4
              rounded-xl
              text-white
              border
              border-white/20
            "
          >
            More Info
          </button>

        </div>

      </div>

    </section>

  );
};

export default HeroBanner;