import AuthBar from "../AuthBar/AuthBar";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <AuthBar />
      <main className={css.container}>{children}</main>
    </>
  );
};
