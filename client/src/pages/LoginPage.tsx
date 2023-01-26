import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken, setProfile } = useAuthStore(
    ({ setToken, setProfile }) => ({
      setToken,
      setProfile
    }),
    shallow
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value.trim();
    const password = e.currentTarget.password.value.trim();

    if ([email, password].includes('')) return;

    const { token } = await loginRequest(email, password);
    setToken(token);

    const { profile } = await profileRequest();
    setProfile(profile);

    navigate('/profile', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="correo@email.com" />
      <input name="password" type="password" placeholder="******" autoComplete="on" />
      <button type="submit">Login</button>
    </form>
  );
};
