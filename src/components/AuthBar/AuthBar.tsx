import Navigation from "../Navigation/Navigation";
import css from "./AuthBar.module.css";

const AuthBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};

export default AuthBar;
