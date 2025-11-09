import { Outlet } from "react-router";
import './RootLayout.css';
import NavBarComponent from "./navigation-bar/nav-bar.component";

export default function RootLayout() {
return (
    <>
      <NavBarComponent />
      <div className="homepage-root-container">
        <Outlet />
      </div>
    </>
  );

}