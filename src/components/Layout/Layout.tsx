import AuthBar from "../AuthBar/AuthBar";
import css from "./Layout.module.css";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AuthBar />
      <main className={css.container}>{children}</main>
    </>
  );
};
