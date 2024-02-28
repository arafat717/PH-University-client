import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import { logout, useCurrentToken } from "../../redux/feature/auth/AuthSlice";
import { Navigate } from "react-router-dom";
import { VarifayToken } from "../../utils/VarifayToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = VarifayToken(token);
  }
  const disPatch = useAppDispatch();

  // console.log(user);

  if (role !== undefined && role !== user?.role) {
    disPatch(logout());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
