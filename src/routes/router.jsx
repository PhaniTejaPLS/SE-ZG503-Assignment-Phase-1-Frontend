import { createBrowserRouter, Navigate } from "react-router";
import App from "../App.jsx";
import HomepageRoot from "../homepage/homepage-root.jsx";
import { InventoryPageRoot } from "../inventory-page/inventory-root.jsx";
import { EquipmentPage } from "../inventory-page/equipment-page/equipment-page.component.jsx";
import RootLayout from "../RootLayout.jsx";

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
                path: "home",
                element: <HomepageRoot />
            },
            {
                path: "inventory",
                children: [
                    {
                        path:"labs",
                        element: <InventoryPageRoot tag="lab" />
                    },
                    {
                        path:"sports",
                        element: <InventoryPageRoot tag="sports" />
                    },
                    {
                        path:"electronics",
                        element: <InventoryPageRoot tag="electronics" />
                    },
                    {
                        path:"music",
                        element: <InventoryPageRoot tag="music" />
                    },
                    {
                        path:"furniture",
                        element: <InventoryPageRoot tag="furniture" />
                    }
                ]
            }

        ]
        
    }
])