import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { RouteProps } from "./Route.types";

const RestrictedRoute = ({ component, redirectTo = "/" }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
