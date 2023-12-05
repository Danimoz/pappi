'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navbarSections = [
  { name:'Home', link: '/' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Contact', link: '/#contact' },
]

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-9 top-0 sticky bg-orange-100 z-50">
      <nav className="container mx-auto flex h-20 items-center justify-between">
        <div className="md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-black">Bonanza & Sons Mart</h1>
        </div>

        <div className="hidden md:flex space-x-4">
          {
            navbarSections.map((section) => (
              <Link key={section.name} href={section.link} className="p-3 hover:text-green-500 text-black">{section.name}</Link>
            ))
          }
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src='/menu.svg' alt='Menubar Toggle' width={30} height={30} priority />
          </button>
        </div>
      </nav>

      <div className={isMenuOpen ? 'w-full' : 'hidden'}>
        {
          navbarSections.map((section) => (
            <Link key={section.name} href={section.link} className="block hover:bg-green-300 hover:rounded-xl text-black w-full p-3">{section.name}</Link>
          ))
        }
      </div>
    </header>
  )
}