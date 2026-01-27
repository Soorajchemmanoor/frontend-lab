import Feed from '../components/Feed';
import users from '../Users';
import { useParams } from 'react-router-dom';

function   UserDetails() {   
    let { username } = useParams();
    let user = users.find(u => u.username === username);
    
  
    return (
        <>
            <div className="mx-auto max-w-2xl p-4 flex justify-start items-center gap-4 ">
                <img src={user.image} alt={user.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <div className=" mb-4">
                    <div className='flex items-baseline gap-2'>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-500">@{user.username}</p> 
                    </div>
                    <h3 className='text-gray-700 mt-1  '>{user.profession}</h3>
                    <p className="text-gray-700 mt-2">{user.description}</p>
                    <div className="flex gap-4 mt-4">
                        <div>
                            <span className="font-bold">{user.followers}</span>
                            <span className="text-gray-500 ml-1">Followers</span>
                        </div>
                        <div>
                            <span className="font-bold">{user.following}</span>
                            <span className="text-gray-500 ml-1">Following</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Follow</button>
                        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Message</button>
                    </div>
                
                </div>
                    

            </div>
            <div className="mx-auto max-w-4xl p-4 flex flex-wrap gap-4">
                
                <h2 className="text-2xl font-bold w-full mb-4">Posts by {user.name}</h2>
                <div className="grid grid-cols-3 gap-2 w-full">
                    {user.posts.map((post) => (
                        <Feed username={user.username} key={post.id}  post={post} />
                    ))}
                </div>

            
            </div>
        </>
    )
}
export default UserDetails;