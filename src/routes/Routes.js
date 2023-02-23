import React from "react";
import Nav from "../pages/Navigation/Nav";
import HomePage from "../pages/Home/Home.page";
import SignIn from "../pages/Forms/Sign.in/Sign.in";
import SingUp from "../pages/Forms/Sign.up/Sign.up";
import SecretPage from "../pages/Secret.page/Secret.page";
import ForgotPassword from "../pages/Forgot.pass/Forgot.password";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

export const appRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  singIn: {
    id: 2,
    path: "/singIn",
    element: <SignIn />,
  },
  singUp: {
    id: 2,
    path: "/singUp",
    element: <SingUp />,
  },
  ForgotPassword: {
    id: 3,
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  SecretPage: {
    id: 4,
    path: "/SecretPage",
    element: <SecretPage />,
  },
};

const Routes = () => {
  return (
    <div>
      <Nav />
      <ReactRouterRoutes>
        {Object.values(appRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRoutes>
    </div>
  );
};

export default Routes;
