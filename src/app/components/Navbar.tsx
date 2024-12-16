"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi"; 
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import useDarkMode from '@/hooks/useDarkMode';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    const { setTheme } = useTheme();

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    const pathname = usePathname();

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    return (
        <header className='max-w-[1280px]  min-w-[390px] flex  dark:bg-black bg-white mt-4 lg:mt-6 lg:mx-24 pb-4'>
            <div className='container h-12 space-x-2 lg:space-x-10 py-4 flex justify-between items-center'>
                {/* Mobile Menu Icon */}
                <div className='flex space-x-2'>
                    <div className='md:hidden flex items-center'>
                        <button 
                            className="text-xl p-2" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <HiX /> : <IoMenu />}
                        </button>
                    </div>
                    {/* Mobile Menu Links */}
                    {isMenuOpen && (
                        <nav className='md:hidden bg-white text-black absolute top-16 w-full shadow-md'>
                            <ul 
                                onClick={() => setIsMenuOpen(false)} 
                                className='flex flex-col space-y-4 p-4'>
                                <Link href="/about" className={`${pathname ==='/about'?'underline underline-offset-4' : ''}`}>about</Link>
                                <Link href="/contact" className={  `${pathname ==='/contact'?'underline underline-offset-4' : ''}`}>contact</Link>
                                <Link href="/posts" className={`${pathname ==='/posts'?'underline underline-offset-4' : ''}`}>posts</Link>
                            </ul>
                        </nav>
                    )}
                    {/* Brand Name */}
                    <div className='text-2xl font-bold'><Link href='/'>SpaceNepalT</Link></div>
                </div>

                {/* Desktop Navigation Links */}
                <nav className='hidden md:flex space-x-4 md:space-x-6 text-sm lg:text-lg font-satoshi'>
                    <Link href="/about" className={`${pathname ==='/about'?'underline underline-offset-4' : ''}`}>about</Link>
                    <Link href="/contact" className={  `${pathname ==='/contact'?'underline underline-offset-4' : ''}`}>contact</Link>
                    <Link href="/posts" className={`${pathname ==='/posts'?'underline underline-offset-4' : ''}`}>posts</Link>
                </nav>

                {/* Search Bar */}
                <div className={`flex items-center flex-grow space-x-2 md:space-x-4 px-4 border outline-none shadow-xl dark:bg-black bg-gray-50/30 rounded-full ${isSearchOpen ? 'flex' : 'hidden'} md:flex`}>
                    <button>
                        <IoSearchOutline aria-label="Search Icon" />  
                    </button>
                    <input
                        type="text"
                        placeholder='Search For the post'
                        className="ml-2 py-1 text-center flex-grow border-none dark:bg-black placeholder-gray-[#00000066] focus:outline-none focus:ring-0"
                    />
                </div>
                <div className='flex items-center space-x-4'>
                    {/* Search Button for Mobile */}
                    <button 
                        className={`cursor-pointer md:hidden ${isSearchOpen ? 'hidden' : 'flex'}`} 
                        onClick={() => setIsSearchOpen(true)} 
                        aria-label="Expand Search"
                    >
                        <IoSearchOutline />
                    </button>

                    {/* Cart and Profile Icons */}
                    <div className='flex items-center space-x-2 md:space-x-4 pr-6 ml-2'>
                        <div className='relative'>
                            <button onClick={toggleProfile} className="font-semibold transition duration-700" aria-label="Profile">
                                <CgProfile />
                            </button>
                            {isProfileOpen && (
                                <div className='absolute flex justify-center left-1/2 transform -translate-x-1/2 right-0 mt-2 w-36 dark:bg-black bg-white border border-gray-200 rounded-lg shadow-lg'>
                                    <ul onClick={toggleProfile}>
                                        <li className='py-2 px-6 hover:shadow-xl cursor-pointer'><Link href='/profile'>Profile</Link></li>
                                        <li className='py-2 px-6 hover:shadow-xl cursor-pointer'><Link href='/form'>Add Post</Link></li>
                                        <li className='py-2 px-6 hover:text-red-600 cursor-pointer'><button>Log out</button></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=' shadow-lg ml-4 '>
                         <button onClick={toggleDarkMode}>{isDarkMode? "🌙" : "🔆"}</button>
                    </div>     
                    {/* Dark Mode Toggle */}
                    {/* <div className='shadow-lg'>
                        {/* <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                            {isDarkMode ? "🌙" : "🔆"}
                        </button> */}
                        {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    </div> */} 
                </div>
            </div>
        </header>
    );
};

export default Navbar;
