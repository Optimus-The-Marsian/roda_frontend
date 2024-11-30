import React, { useState, useEffect, useRef } from 'react';
import { Search, UploadCloud, Sparkles, ArrowRight, Github } from 'lucide-react';
import '../style/landingPage.css'; // Import the CSS file

const LandingPage = () => {
    const [query, setQuery] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
    }, [darkMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            console.log('URL submitted:', query);
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const examples = [
        "Write a blog post about artificial intelligence",
        "Help me debug my Python code",
        "Explain quantum computing to a beginner"
    ];

    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Navbar */}
            <nav className="border-b navbar">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="h-6 w-6 text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">RODA AI</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Rapid Optimization of Digital Assets</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                                Toggle Dark Mode
                            </button>
                            <a
                                href="#"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                            >
                                <Github className="h-5 w-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24 flex-grow">
                {/* Hero Section */}
                <div className="text-center space-y-8 mb-12">
                    <h1 className={`text-4xl sm:text-6xl font-bold ${darkMode ? 'hero-text' : 'hero-text-light-mode'}`}>
                        Your AI-Powered
                        <span className="text-blue-600 block mt-2">Multimedia Optimization Tool</span>
                    </h1>
                    <p className="text-xl secondary-text max-w-2xl mx-auto">
                    Convert hours of audio and video into concise, AI-powered summaries that highlight key points and save you time.
                    </p>
                </div>

                {/* Features Section */}
                <div className="max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold secondary-text dark:text-gray-100 text-center mb-8">Features</h2>
                    <ul className="list-disc list-inside secondary-text dark:text-gray-300 space-y-4">
                        <li className="flex items-center">
                            <Sparkles className="mr-2 h-5 w-5 text-blue-600" />
                            <strong className="secondary-text">Summarization:</strong> Easily summarize long audio and video files.
                        </li>
                        <li className="flex items-center">
                            <Sparkles className="mr-2 h-5 w-5 text-blue-600" />
                            <strong className="secondary-text">Generation:</strong> Generate creative content and scripts based on provided inputs.
                        </li>
                        <li className="flex items-center">
                            <Sparkles className="mr-2 h-5 w-5 text-blue-600" />
                            <strong className="secondary-text">Dynamic Compression:</strong> Adjust compression ratios dynamically to suit your needs.
                        </li>
                    </ul>
                </div>

                {/* Input and Upload Section */}
                <div className="max-w-2xl mx-auto mb-12">
                    <form onSubmit={handleSubmit} className="relative mb-8">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Enter a URL for audio or upload"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                         transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                                <button
                                    type="button"
                                    onClick={handleUploadClick}
                                    className={`p-2 rounded-xl transition-colors
                    text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300`}
                                >
                                    <UploadCloud className="h-6 w-6" />
                                </button>
                                <input
                                    type="file"
                                    accept="audio/*"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ArrowRight className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Demo Section */}
                <h2 className="text-3xl font-bold feature-text dark:text-gray-100 text-center mb-8">
                    Demo
                </h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold feature-text dark:text-gray-200">
                            Original Audio
                        </h3>
                        <audio controls className="w-full">
                            <source src="https://res.cloudinary.com/dgjfdzqod/video/upload/v1732581672/audio/qeaaaklh4bo3siwfb4k8.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold feature-text dark:text-gray-200">
                            Summarized Audio (~60% Compression Ratio)
                        </h3>
                        <audio controls className="w-full">
                            <source src="https://res.cloudinary.com/dgjfdzqod/video/upload/v1732581679/audio/kz0uxdpgicv2iw7publu.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 footer">
                <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    © 2024 RODA AI. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
