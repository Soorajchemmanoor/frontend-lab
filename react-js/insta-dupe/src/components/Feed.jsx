function Feed({ key, post }){
    return(
        <>
            
            <img src={post.image} alt={post.caption} className="w-[260px] h-64 object-cover flex-grow"  />
                
        </>
        
    );
}

export default Feed;