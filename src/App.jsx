import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Nav } from 'react-bootstrap';
import { NavBarComponent } from './navigation-bar/nav-bar.component.jsx';
import './App.css'
import HomepageRoot from './homepage/homepage-root/homepage-root.jsx';

function App() {

   return (
    <>
      <div>
        <NavBarComponent />
      </div>
      <div>
        <HomepageRoot />
      </div>
    </>
  );
}

export default App
