import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAllowed: boolean;
}

export const ProtectedRoute = ({ isAllowed }: Props) => (!isAllowed ? <Navigate to="login" replace /> : <Outlet />);
