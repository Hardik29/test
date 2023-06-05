import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Cookies } from "react-cookie";

const RequireAuth = () => {
    // const { auth } = useAuth();
    const cookie = new Cookies()
    const location = useLocation();

    const auth = cookie.get('token')

    return (
        auth ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />
    )
}

export default RequireAuth;