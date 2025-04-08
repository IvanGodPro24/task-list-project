import { useAppSelector } from "./hooks";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { RouteProps } from "./Route.types";

const RestrictedRoute = ({ component, redirectTo = "/" }: RouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
