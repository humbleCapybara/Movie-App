function Button({children}){
    const styling = "rounded-full hover:cursor-pointer text-white px-4 py-2 font-semibold transition hover:bg-gray-700 hover:scale-105 hover:bg-gray-800";
    return (<button className={styling}>
        {children}
    </button>
    )
}

export default Button