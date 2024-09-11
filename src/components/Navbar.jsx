// components/Navbar.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../assets/logo.png'; // Ensure this image path is correct

const NavLink = ({ href, children }) => {
    const router = useRouter();

    return (
        <span
            onClick={() => router.push(href)}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer"
        >
            {children}
        </span>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center justify-between w-full">
                        <div onClick={() => router.push('/')} className="flex items-center cursor-pointer">
                            <Image src={logo} alt="Logo" height={50} width={50} className="invert" />
                            <span className="text-xl font-bold ml-2">MentorTalk</span>
                        </div>
                        <div className="hidden md:flex space-x-4 ml-10">
                            <NavLink href="/"><span>Home</span></NavLink>
                            <NavLink href="/aboutPage"><span>About</span></NavLink>
                            <NavLink href="/mentorsList"><span>Mentors</span></NavLink>
                            <NavLink href="/askQuestion"><span>Ask Question</span></NavLink>
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink href="/"><span>Home</span></NavLink>
                    <NavLink href="/about"><span>About</span></NavLink>
                    <NavLink href="/mentorProfile"><span>Mentors</span></NavLink>
                    <NavLink href="/contact"><span>Contact</span></NavLink>
                </div>
            </div>
        </nav>
    );
}
