'use client'
import Link from 'next/link';
import React, { useState } from 'react'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='bg-orange-100 fixed z-10 top-0 left-0 right-0 border-b border-gray-200 sticky"'>
        <div className="relative container mx-auto py-4">
            <div className="flex items-center justify-end">
                <div className="pt-2 pl-8 mr-auto">
                    <Link href="/" className="text-xl font-bold text-white dark:text-white lg:text-xl hover:text-orange-300 dark:hover:text-gray-300">Hannah Kraft</Link>
                </div>
                <div className='hidden lg:flex space-x-10 pl-[200px]'>
                    <Link href="/" className="text-sm  font-bold text-white hover:text-orange-300">Home</Link>
                    <Link href="/About/" className="text-sm  font-bold text-white hover:text-orange-300">About</Link>
                    <Link href="/Flipbook/" className="text-sm  font-bold text-white hover:text-orange-300">Flipbook</Link>
                    <Link href="/Contact/" className="text-sm font-bold text-white hover:text-orange-300">Contact</Link>
                </div>
            </div>
        </div>
        </nav>
        );
    };

export default Navbar