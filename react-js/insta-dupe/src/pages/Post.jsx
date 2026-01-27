import { Link, useParams } from "react-router-dom";
import users from '../Users';

function Post(){
    const { username, id } = useParams(); 
    const user = users.find(u => u.username === username);
    const post = user.posts.find(p => p.id === parseInt(id));
    


    return (
        <>
            <div className="mx-auto max-w-xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold mb-4">Post by {user.name}</h1>
                    <Link to={`/profile/${user.username}`} className="text-white hover:underline bg-black p-2 rounded">
                        Back to Profile
                    </Link>
                </div>
                
                <img src={post.image} alt={post.caption} className="w-full h-auto object-cover mb-4 border-8 border-white shadow-xl " />
                <p className="text-gray-700">{post.caption}</p>
                <div className="flex justify-start  items-center gap-8 mt-4">
                    
                    
                    <div>
                         
                        <span>{post.posted}</span>
                    </div>

                    <div>
                        <span className="font-bold">{post.likes}</span>
                        <span className="text-gray-500 ml-1">Likes</span>
                    </div>
                    
                
                </div>

                
                
                
            </div>
            <div className="mx-auto max-w-xl p-4 flex items-center gap-4   mb-24 bg-neutral-100">
                <img src={user.image} alt="" className="w-24 h-24 rounded-full object-cover" />
                <div className="text-left" >
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-700 mt-1">{user.profession}</p>
                    <p className="text-gray-700">{user.description}</p>
                </div>
            </div>
               
        </>
    )
}
export default Post;