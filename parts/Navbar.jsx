import React, { useState, useEffect } from 'react';
import { Sparkles, Github, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
    }, [darkMode]);

    return (
        <nav className="border-b navbar pt-4"> {/* Added `pt-4` for top padding */}
            <div className="max-w-7xl mx-auto px-4 pt-5 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Toggle Button */}
                    <div className="flex flex-col items-center space-y-2">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Sparkles className="h-6 w-6 text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">RODA AI</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Rapid Optimization of Digital Assets
                                </span>
                            </div>
                        </div>

                        {/* Dark Mode Toggle */}
                        
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-4">
                            <Link
                                to="/"
                                className="secondary-text dark:text-gray-300 dark:hover:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                to="/login"
                                className="secondary-text dark:text-gray-300 dark:hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="secondary-text dark:text-gray-300 dark:hover:text-white"
                            >
                                Signup
                            </Link>
                        </div>

                        {/* GitHub Link */}
                        {/* <a
                            href="#"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                        >
                            <Github className="h-5 w-5" />
                            <span>GitHub</span>
                        </a> */}
                    <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
