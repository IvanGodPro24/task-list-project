import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { Toaster } from "sonner";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "./hooks";

const pages = {
  HomePage: lazy(() => import("./pages/HomePage/HomePage")),
  RegistrationPage: lazy(
    () => import("./pages/RegistrationPage/RegistrationPage")
  ),
  LoginPage: lazy(() => import("./pages/LoginPage/LoginPage")),
  TasksPage: lazy(() => import("./pages/TasksPage/TasksPage")),
  NotFoundPage: lazy(() => import("./pages/NotFoundPage/NotFoundPage")),
};

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster expand position="top-center" />

      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<pages.HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<pages.RegistrationPage />}
                  redirectTo="/tasks"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<pages.LoginPage />}
                  redirectTo="/tasks"
                />
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoute
                  component={<pages.TasksPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="*" element={<pages.NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
