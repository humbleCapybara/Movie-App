import { useState, useContext, useEffect, createContext } from "react";

const favouriteContext = createContext();
export const useFavouriteContext = () => useContext(favouriteContext);

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = localStorage.getItem("favourites");
        return storedFavourites ? JSON.parse(storedFavourites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    }

    const removeFromFavourites = (movieID) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieID));
    }

    const isFavourite = (movieID) => {
        return favourites.some(movie => movie.id === movieID);
    }

    const values = {
        isFavourite,
        addToFavourites,
        setFavourites,
        removeFromFavourites,
        favourites
    };

    return <favouriteContext.Provider value={values}>
        {children}
    </favouriteContext.Provider>
}