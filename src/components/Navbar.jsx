// components/Navbar.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../assets/logo.png';
import Image from 'next/image';

const NavLink = ({ href, children }) => (
    <Link href={href}>
        {React.cloneElement(children, { className: "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer" })}
    </Link>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center justify-between w-full">
                        <NavLink href="/">
                            <span className="text-xl font-bold">
                                <Image src={logo} height={50} className='invert' />
                            </span>
                        </NavLink>
                        <div className="hidden md:flex space-x-4 ml-10">
                            <NavLink href="/"><span>Home</span></NavLink>
                            <NavLink href="/about"><span>About</span></NavLink>
                            <NavLink href="/services"><span>Services</span></NavLink>
                            <NavLink href="/contact"><span>Contact</span></NavLink>
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* This div block is conditionally rendered based on the value of isOpen */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink href="/"><span>Home</span></NavLink>
                    <NavLink href="/about"><span>About</span></NavLink>
                    <NavLink href="/services"><span>Services</span></NavLink>
                    <NavLink href="/contact"><span>Contact</span></NavLink>
                </div>
            </div>
        </nav>
    );
}
