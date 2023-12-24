import React from 'react'
import Home from '../page'

import { useState } from 'react';

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <nav>
      <div className=''>

      </div>
    </nav>
  )
}
