import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuth: boolean = useAppSelector(
    (store: any) => store.authReducer.isAuth
  );

  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
};
