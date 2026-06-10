import { Navigate, Outlet } from "react-router-dom";
import { getUserLocalStorage } from "../services/localStorage";

export function PrivateRoute() {
    const user = getUserLocalStorage();

    return user ? <Outlet /> : <Navigate to="/login" />;
}