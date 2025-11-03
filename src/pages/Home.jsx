import Card from '../components/Card.jsx';
import {useEffect, useState} from 'react';
import {getPopularMovies, searchMovies} from '../services/api.js';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const response = await getPopularMovies();
                setMovies(response);
            }catch (error) {
                setError(error.message);
                console.log(error);
            }finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    
    useEffect(() => {
        if (searchQuery.trim() === '') {
            // If search query is empty, load popular movies
            const loadPopularMovies = async () => {
                setLoading(true);
                try {
                    const response = await getPopularMovies();
                    setMovies(response);
                } catch (error) {
                    setError(error.message);
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            };
            loadPopularMovies();
        }else {
            const searchForMovies = async () => {
                setLoading(true);
                try {
                    const response = await searchMovies(searchQuery);
                    setMovies(response);
                }
                catch (error) {
                    setError(error.message);
                    console.log(error);
                }
                finally {
                    setLoading(false);
                }
            };
            searchForMovies();
        }
        return () => {
            setMovies([]);
            setError(null);
            setLoading(true);           
        }
    }, [searchQuery]);

    function handleSearch(e) {
        e.preventDefault();
        console.log(e.target.value);
    }
    return (
        <>
            <div className=''>
                <h1 className="text-4xl font-bold text-center mt-24 mb-8">
                    Popular Movies
                </h1>
                <form onSubmit={handleSearch} className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="min-w-[50%] rounded-3xl p-3 px-8 bg-gray-700 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>
            <div className="p-8 flex flex-wrap gap-8 justify-center min-h-screen">
                {movies.length > 0
                    ? movies.map((movie) => (
                          <Card key={movie.id} movie={movie} />
                      ))
                    : !loading && <p>No popular movies found.</p>}
                {loading && (
                    <p className="flex justify-center items-center">
                        Loading...
                    </p>
                )}
                {error && (
                    <p className="text-black flex justify-center items-center">
                        Error: {error}
                    </p>
                )}
            </div>
        </>
    );
}

export default Home;