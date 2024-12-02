import React, { useState, useRef } from 'react';
import Navbar from '../parts/Navbar'; // Import the Navbar component
import { UploadCloud, ArrowRight } from 'lucide-react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../style/landingpage.css'; // Import the CSS file

const LandingPage = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [audioUrl, setAudioUrl] = useState(null);
    const fileInputRef = useRef(null);

    // Handle file upload logic
    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input click
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('audio/')) {
                setMessage('Invalid file type. Please upload an audio file.');
                return;
            }
            setMessage('');
            // Update the input text to the file name
            setQuery(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const file = fileInputRef.current?.files[0];
        const url = query.trim();
    
        // Ensure at least one input is provided
        if (!file && !url) {
            setMessage('Please upload a file or enter a URL.');
            return;
        }
    
        // Check if URL is provided and is valid
        const isUrlValid = isValidUrl(url);
        
        // If URL is valid and a file is uploaded, show an error
        if (isUrlValid && file) {
            setMessage('Please provide either a file or a URL, not both.');
            return;
        }
    
        // Validate the URL if it exists
        if (url && !isUrlValid && !url.endsWith('.mp3')) {
            setMessage('Please enter a valid URL or an MP3 file URL.');
            return;
        }
    
        setLoading(true);
        setMessage('');
    
        try {
            let formData = new FormData();
    
            if (file) {
                // Add the file to the form data
                formData.append('audio', file);
            } else if (url) {
                // Add the URL to the form data
                formData.append('url', url);
            }
    
            // Send the request to the backend
            const response = await axios.post('https://roda-ai-server-c353a210639c.herokuapp.com/process-audio', formData, {
                // const response = await axios.post('http://localhost:5000/process-audio', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true, // Ensure cookies are sent with the request
            });
    
            // Assuming the response contains a URL to the processed audio
            setAudioUrl(response.data.audio_url); // Store the audio URL from the response
        } catch (error) {
            setMessage('Error processing request. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
            fileInputRef.current.value = ''; // Clear file input
            setQuery(''); // Clear URL input
        }
    };
    
    // Helper function to validate URL
    const isValidUrl = (url) => {
        // Check if the URL is a valid URL (you can adjust the regex for stricter validation)
        const regex = /^(https?:\/\/)?([\w\d-]+\.)+[a-z]{2,6}(\/[\w\d-]*)*(\/)?(\?[^\s]*)?$/;
        return regex.test(url);
    };
    
    

    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Use the Navbar component here */}
            <Navbar />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24 flex-grow">
                <div className="text-center space-y-8 mb-12">
                    <h1 className="text-4xl sm:text-6xl font-bold hero-text">
                        Your AI-Powered <span className="text-blue-600 block mt-2">Multimedia Optimization Tool</span>
                    </h1>
                    <p className="text-xl secondary-text max-w-2xl mx-auto">
                        Convert hours of audio and video into concise, AI-powered summaries that highlight key points and save you time.
                    </p>
                </div>

                {/* Upload Form Section */}
                <div className="max-w-2xl mx-auto mb-12">
                    <form onSubmit={handleSubmit} className="relative mb-8">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Enter a URL for audio or upload"
                                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                                <button
                                    type="button"
                                    onClick={handleUploadClick}
                                    className="p-2 rounded-xl transition-colors text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    <UploadCloud className="h-6 w-6" />
                                </button>
                                <input
                                    type="file"
                                    accept="audio/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    disabled={loading}
                                >
                                    <ArrowRight className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Displaying loading, messages, and result */}
                {loading && (
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <div className="spinner">Processing...</div>
                        <p>Processing... Please wait.</p>
                    </div>
                )}

                {message && <p>{message}</p>}

                {audioUrl && (
                    <div className="flex justify-center mt-8">
                        <div>
                            <h3 className="text-center mb-4">Summarized Audio:</h3>
                            <audio controls className="mx-auto">
                                <source src={audioUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                )}
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
