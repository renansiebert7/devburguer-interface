import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const token = localStorage.getItem("devburguer:token");

    return token ? <Outlet /> : <Navigate to="/login" replace />;
}