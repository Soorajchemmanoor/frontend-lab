import { Link } from 'react-router-dom';

function Navbar(){  
    return (
        <>
            <nav className="flex gap-5 justify-between items-center p-4 bg-neutral-100 border-b border-gray-300 mb-4">
                <h1 className='text-2xl font-extrabold'>My React SPA</h1>
                <div className="flex gap-3 font-bold">
                    <Link to="/" className="text-black ">Home</Link>
                    <Link to="/about" className="text-black ">About</Link>
                    <Link to="/contact" className="text-black ">Contact</Link>
                </div>
            </nav>
        
        </>
    );
}

export default Navbar;