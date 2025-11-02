
function Like({liked=false}) {
    return <button className='absolute top-1 right-1 p-1 rounded-full hover:cursor-pointer'>
        {liked ? '❤️' : '🤍'}
    </button>;
}

export default Like;