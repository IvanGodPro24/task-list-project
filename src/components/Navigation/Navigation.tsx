import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn, shallowEqual);

  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "#000", borderBottom: "1px solid #fff" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <ul className={css.navlist}>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/tasks" className="link">
                Tasks
              </NavLink>
            </li>
          )}
        </ul>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
