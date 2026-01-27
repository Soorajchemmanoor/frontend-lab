import { Link } from "react-router-dom";

function UserCard( { id, image, fname, username } ) {
    return (
        <>
            <Link to={`/profile/${username}`}>
            <div key={id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src={image}
                        alt={username}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <p className="font-medium">{fname}</p>
                        <p className="text-sm text-gray-500">@{username}</p>
                    </div>

                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Accept</button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Decline</button>
                </div>
            </div>
            </Link>
        
        </>
    )
}
export default UserCard;
