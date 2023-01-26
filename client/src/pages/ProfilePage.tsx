import { useAuthStore } from '../store/auth';

export const ProfilePage = () => {
  const setLogout = useAuthStore(({ setLogout }) => setLogout);
  const profile = useAuthStore(({ profile }) => profile);

  return (
    <div>
      <h1>ProfilePage</h1>
      <div>{JSON.stringify(profile)}</div>
      <button onClick={setLogout}>Logout</button>
    </div>
  );
};
