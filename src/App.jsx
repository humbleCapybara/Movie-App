import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import { FavouritesProvider } from './contexts/FavouritesContext.jsx'

function App() {

  return <> 
    <FavouritesProvider>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </main>
    </FavouritesProvider>
  </>
}

export default App
