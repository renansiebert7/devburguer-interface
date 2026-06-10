import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const user = JSON.parse(localStorage.getItem('devburguer:userData'));

    return user ? <Outlet /> : <Navigate to="/login" replace />;
}