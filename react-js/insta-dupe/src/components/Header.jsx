import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">InstaDupe</h1>
                <div className="flex gap-3">
                    <Link to="/" className="text-black mx-2 font-bold">Home</Link>
                    <Link to="/profile" className="text-black mx-2 font-bold">Profile</Link>
                    <Link to="/requests" className="text-black mx-2 font-bold">Requests</Link>
                    <Link to="/settings" className="text-black mx-2 font-bold">Settings</Link>
                </div>
            </header>
        </>
    );
}

export default Header;