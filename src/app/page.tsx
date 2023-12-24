"use client"
import Image from 'next/image'
import Hero from './components/Hero'
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col bg-[#f7f5f6] dark:bg-neutral-900 container my-auto px-12 py-4 min-w-full lg:pl-40">
        <Navbar />
        <Hero />
        <button className='bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 py-2 px-3 rounded-full w-10 h-10 absolute' onClick={toggleDarkMode}>
          {darkMode? <BsToggleOn size={25}/>:<BsToggleOff size={25}/>}
        </button>
      </main>
    </div>
  )
}
