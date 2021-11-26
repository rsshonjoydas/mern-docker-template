import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../firebase/firebase";

export interface IAuthRouteProps {}

const PrivateRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  if (!auth.currentUser) {
    return <Redirect to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
