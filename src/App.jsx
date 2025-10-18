import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind + React!</h1>
      <p className="mt-2 text-gray-700">Styled with utility-first classes 🚀</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Click Me
      </button>
    </div>
    </>
  );
}

export default App
