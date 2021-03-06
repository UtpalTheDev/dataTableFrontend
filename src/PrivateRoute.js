import { Navigate, Link, Route } from "react-router-dom";
import { useLogin } from "./context/LoginContext";

export default function PrivateRoute({ path, ...props }) {
  const { isUserLogIn } = useLogin();
  return isUserLogIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
