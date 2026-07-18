import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";

import MovieDetails from "../pages/MovieDetails/MovieDetails";

import Favorites from "../pages/Favorites/Favorites";


const AppRouter = () => {


  return (

    <BrowserRouter>

      <Routes>


        {/* Layout Wrapper */}

        <Route element={<MainLayout />}>


          {/* Home Page */}

          <Route
            path="/"
            element={<Home />}
          />



          {/* Movie Details Page */}

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />



          {/* Favorites Page */}

          <Route
            path="/favorites"
            element={<Favorites />}
          />


        </Route>




        {/* 404 Page */}

        <Route
          path="*"
          element={
            <div className="text-white bg-black min-h-screen flex items-center justify-center">
              Page Not Found
            </div>
          }
        />


      </Routes>


    </BrowserRouter>

  );

};


export default AppRouter;