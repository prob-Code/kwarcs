import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">TWIN</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link
                  to="/map"
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                >
                  Map
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={() => logout()}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 