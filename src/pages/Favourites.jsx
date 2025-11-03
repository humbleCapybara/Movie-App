import Card from '../components/Card';
import {useFavouriteContext} from '../contexts/FavouritesContext';

function Favourites() {
    const {favourites} = useFavouriteContext();

    if (favourites.length > 0){
        return <div className='flex justify-center items-center min-h-screen flex-wrap gap-8 p-8 mt-24'>
            {favourites.map((movie) => (
                <Card movie={movie} key={movie.id}/>
            ))}
        </div>
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <h2>No favourite movies found!</h2>
        </div>
    );
}

export default Favourites;