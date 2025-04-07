import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul className={css.authlist}>
      <li>
        <NavLink to="/register" className="link">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="link">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
