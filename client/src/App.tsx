import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, ProfilePage, RegisterPage, HomePage } from './pages';

import { Navigation, ProtectedRoute } from './components';
import { useAuthStore } from './store/auth';

export const App = () => {
  const isAuthenticated = useAuthStore(({ isAuthenticated }) => isAuthenticated);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
