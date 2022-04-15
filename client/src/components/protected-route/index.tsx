import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../shared/hooks/useAuthContext";

interface ProtectedRouteProps extends RouteProps {}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ...restOfProps }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...restOfProps} />;
};

export default ProtectedRoute;
