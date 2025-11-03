import Navlink from "./Navlink";

function Navbar() {
    return <nav className="backdrop-blur-sm bg-black/30 fixed top-0 w-full h-16 px-6 flex justify-between items-center shadow-md z-10">
        <div className="text-2xl font-bold">Movie App</div>
        <div className="flex space-x-4 gap-1 rounded-full p-2">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/favourites">Favourites</Navlink>
        </div>
    </nav>
}

export default Navbar;