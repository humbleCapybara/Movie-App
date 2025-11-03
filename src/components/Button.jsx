function Button({children}){
    const styling = "rounded-full hover:cursor-pointer text-white px-4 py-2 font-semibold transition hover:bg-black hover:backdrop-blur-md hover:scale-105";
    return (<button className={styling}>
        {children}
    </button>
    )
}

export default Button