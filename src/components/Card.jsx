import {useFavouriteContext} from '../contexts/FavouritesContext.jsx';
import Like from './Like.jsx';

function Card({movie}) {
    const {
        isFavourite,
        addToFavourites,
        removeFromFavourites,
    } = useFavouriteContext();

    const favourite = isFavourite(movie.id);
    
    function handleClick(e){
        e.preventDefault();
        if (favourite) removeFromFavourites(movie.id);
        else addToFavourites(movie);
    }

    return <div className='rounded-md p-4 w-72 hover:bg-gray-600 hover:cursor-pointer relative' onClick={handleClick}>
        <div>
            <div className='relative'>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://placehold.co/600x900?text=No+image+available`} alt={movie.title} className='rounded-md'/>
                <Like liked={favourite}/>
            </div>
        </div>
        <div>
            <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
            <p className="text-white">Date of Release: {movie.release_date ? movie.release_date.split('-')[0] : "N/A" }</p>
        </div>
    </div>;
}

export default Card;