import { createBrowserRouter, Navigate } from "react-router";
import App from "../App.jsx";
import HomepageRoot from "../homepage/homepage-root.jsx";
import { InventoryPageRoot } from "../inventory-page/inventory-root.jsx";
import { EquipmentPage } from "../inventory-page/equipment-page/equipment-page.component.jsx";
import RootLayout from "../RootLayout.jsx";
import { CartComponent } from "../cart/cart-root.component.jsx";
import { ProtectedRoute } from "../ProtectedRoute.jsx";
import { LoginComponent } from "../login/login.component.jsx";
import { StudentRequestPageComponent } from "../console-pages/student/student-request.component.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <></>,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                // path: "home",
                // element: <HomepageRoot />
                element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                children: [
                    { path: "home", element: <HomepageRoot /> }            
                ]
            },
            {
                path: "inventory",
                children: [
                    {
                        path:"labs",
                        // element: <InventoryPageRoot tag="lab" />
                        element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path:'', element: <InventoryPageRoot tag="lab" /> },
                        ]
                    },
                    {
                        path:"sports",
                        element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path:'', element: <InventoryPageRoot tag="sports" /> },
                        ]
                    },
                    {
                        path:"electronics",
                        element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path:'', element: <InventoryPageRoot tag="electronics" /> },
                        ]
                    },
                    {
                        path:"music",
                        element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path:'', element: <InventoryPageRoot tag="music" /> },
                        ]
                    },
                    {
                        path:"furniture",
                        element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path:'', element: <InventoryPageRoot tag="furniture" /> },
                        ]
                    }
                ]
            },
            {
                path: "cart",
                element: <ProtectedRoute allowedRoles={['admin', 'student', 'staff']} />,
                        children: [
                            { path: "", element: <CartComponent /> },
                        ]
            },
            {
                path:"student",
                element: <ProtectedRoute allowedRoles={['admin','staff','student']} />,
                children:[
                    {
                        path:"requests", element: <StudentRequestPageComponent />
                    }
                ]
            }

        ]
        
    },
    {
        path: "/login", element: <LoginComponent />
    },
])