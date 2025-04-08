import { useAppSelector } from "./hooks";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { RouteProps } from "./Route.types";

const PrivateRoute = ({ component, redirectTo = "/" }: RouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
