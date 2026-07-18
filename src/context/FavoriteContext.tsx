import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types/Movie";


interface FavoriteContextType {

    favorites: Movie[];

    addFavorite: (movie: Movie) => void;

    removeFavorite: (id: number) => void;

    isFavorite: (id: number) => boolean;

    favoriteCount: number;
}



const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);



interface FavoriteProviderProps {
    children: ReactNode;
}



export const FavoriteProvider = ({children}: FavoriteProviderProps) => {


    const [favorites, setFavorites] = useState<Movie[]>(() => {

        const savedFavorites = localStorage.getItem("favorites");

        return savedFavorites 
            ? JSON.parse(savedFavorites)
            : [];

    });



    // Save favorites whenever they change

    useEffect(()=>{

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

    },[favorites]);




    const addFavorite = (movie: Movie)=>{

        setFavorites((previous)=>{

            const exists = previous.some(
                (item)=> item.id === movie.id
            );


            if(exists){
                return previous;
            }


            return [
                ...previous,
                movie
            ];

        });

    };




    const removeFavorite = (id:number)=>{

        setFavorites((previous)=>
            previous.filter(
                (movie)=> movie.id !== id
            )
        );

    };




    const isFavorite = (id:number)=>{

        return favorites.some(
            (movie)=> movie.id === id
        );

    };



    return (

        <FavoriteContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite,
                favoriteCount:favorites.length
            }}
        >

            {children}

        </FavoriteContext.Provider>

    );

};





export const useFavorites = ()=>{

    const context = useContext(FavoriteContext);


    if(!context){

        throw new Error(
            "useFavorites must be used inside FavoriteProvider"
        );

    }


    return context;

};