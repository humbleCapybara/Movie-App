import Navlink from "./Navlink";

function Navbar() {
    return <nav className="backdrop-blur-sm bg-black/30 flex items-center justify-between p-6">
        <div className="text-2xl font-bold">Movie App</div>
        <div className="flex space-x-4 gap-1 rounded-full p-2">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/favourites">Favourites</Navlink>
        </div>
    </nav>
}

export default Navbar;