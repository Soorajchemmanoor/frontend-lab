import { Link } from "react-router-dom";

function Feed({ username, key,  post }){
    return(
        <>
           
            <Link to={`/profile/${username}/post/${post.id}`}>
            <img src={post.image} alt={post.caption} className="w-70.5 h-80 object-cover grow"  />
            </Link>
        </>
        
    );
}

export default Feed;