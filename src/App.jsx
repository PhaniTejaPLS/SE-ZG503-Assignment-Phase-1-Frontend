import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Router, RouterProvider } from 'react-router';
import { NavBarComponent } from './navigation-bar/nav-bar.component.jsx';
import './App.css'
import { router } from './routes/router.jsx';

function App() {


  return (
    <>
      <div>
        <NavBarComponent />
      </div>

      <div className="app-router-container">
        <RouterProvider router={router} />
      </div>
    </>
  )


}

export default App
