import users from '../Users';
import UserCard from '../components/UserCard';


function Requests() {   
    return (
        <>
            <div className="mx-auto max-w-2xl p-4">
                <h1 className="text-3xl font-bold mb-4">Your Follow Requests</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste beatae facere rerum consequuntur.</p>
            </div>

            <div className="mx-auto max-w-2xl p-4">
                {users.map((user, ind) => (
                    <UserCard key={ind} image={user.image} fname={user.name} username={user.username} />
                ))}
            </div>      

        </>
    )
}

export default Requests;