import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export const Navigation = () => {
  const isAuthenticated = useAuthStore(({ isAuthenticated }) => isAuthenticated);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated ? (
          <li>
            <Link to="login">Login</Link>
          </li>
        ) : (
          <li>
            <Link to="profile">Profile</Link>
          </li>
        )}
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};
