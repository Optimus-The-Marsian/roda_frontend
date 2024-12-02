// pages/Signup.jsx
import React, { useState } from 'react';
import Navbar from '../parts/Navbar'; // Import the Navbar component

const Signup = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
        document.body.classList.toggle('light-mode', darkMode);
    };

 const handleSignup = async (e) => {
    console.log('Sending data to backend...');
    e.preventDefault();

    // Prepare the data to be sent
    const formData = { username, email, password, confirmpassword };

    try {
        // const response = await fetch('http://localhost:5000/create-user', {
            const response = await fetch('https://roda-ai-server-c353a210639c.herokuapp.com/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('User creation message:', result);
            // Optionally, redirect or show a success message
            window.location.href = '/login'; // Update with your login page route
        } else {
            const error = await response.json();
            console.error('Error creating user:', error);
            // Handle error (e.g., show an error message)
        }
    } catch (err) {
        console.error('Network error:', err);
        // Handle network error
    }
};


    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Reuse the Navbar component here */}
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24 flex-grow">
                <div className="text-center space-y-8 mb-12">
                    <h1
                        className={`text-4xl sm:text-6xl secondary-text font-bold ${
                            darkMode ? 'hero-text' : 'hero-text-light-mode'
                        }`}
                    >
                        Create Your Account
                    </h1>
                    <p className="text-xl secondary-text max-w-2xl mx-auto">
                        Sign up to start using our AI-powered tools and optimize your digital content effortlessly.
                    </p>
                </div>

                {/* Signup Form */}
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSignup} className="space-y-6">
                        {/* Input for Name */}
                        <div>
                            <label htmlFor="username" className="block mb-2 text-lg font-semibold secondary-text">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                                    transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                        </div>

                        {/* Input for Email */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg font-semibold secondary-text">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                                    transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                        </div>

                        {/* Input for Password */}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-lg font-semibold secondary-text">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                                    transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmpassword" className="block mb-2 text-lg font-semibold secondary-text">
                                 Confirm Password
                            </label>
                            <input
                                id="confirmpassword"
                                type="password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm password"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                                    transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                        </div>

                        {/* Signup Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white h-14 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Signup;
