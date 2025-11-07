import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext.jsx";



export const ProtectedRoute = ({ allowedRoles}) => {
    const { user } = useAuth();

    if(!user.isAuthenticated && !allowedRoles.includes(user.role)){
        
        return <Navigate to="/login" replace />;
    
    }

    if(allowedRoles && !allowedRoles.includes(user.role)){
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;


}