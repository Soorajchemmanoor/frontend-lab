import { Link } from 'react-router-dom';

function Navbar(){  
    return (
        <>
            <nav className="flex gap-5">
            <h1>My React SPA</h1>
            <div className="flex gap-3">
                <Link to="/" className="text-blue-500 underline">Home</Link>
                <Link to="/about" className="text-blue-500 underline">About</Link>

            </div>
            </nav>
        
        </>
    );
}

export default Navbar;