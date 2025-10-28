import { Outlet } from "react-router";

export default function RootLayout() {
return (
    <>
      
      <div className="homepage-root-container">
        <Outlet />
      </div>
    </>
  );

}