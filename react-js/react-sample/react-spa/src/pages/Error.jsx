import { Link } from 'react-router-dom'; 
function Error() {   
    return (    
        <>  

            <div className="p-4 h-screen flex flex-col justify-center items-center">
                <h1 className='text-3xl font-bold text-red-600'>404 - Page Not Found</h1>
                <p className="mt-2 text-lg">The page you are looking for does not exist.</p>
                <Link className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-neutral-600">Go to Home</Link>     
            </div>
        </>
    );
}
export default Error;