function Feed({ key, post }){
    return(
        <>
            
            <img src={post.image} alt={post.caption} className="w-[282px] h-80 object-cover flex-grow"  />
                
        </>
        
    );
}

export default Feed;