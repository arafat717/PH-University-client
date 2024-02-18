import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/feature/hooks";
import { useCurrentToken } from "../../redux/feature/auth/AuthSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
