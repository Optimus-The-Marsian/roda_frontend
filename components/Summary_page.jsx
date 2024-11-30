import React, { useState } from 'react';
import { Search, Mic, Sparkles, ArrowRight, Github } from 'lucide-react';

const AILandingPage = () => {
  const [query, setQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log('Query submitted:', query);
    }
  };

  const examples = [
    "Write a blog post about artificial intelligence",
    "Help me debug my Python code",
    "Explain quantum computing to a beginner"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold">AI Assistant</span>
            </div>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
            Your AI-Powered
            <span className="text-blue-600 block mt-2">Creative Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ask anything, get intelligent answers. Your personal AI assistant for writing,
            analysis, and creative tasks.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="relative mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full h-14 px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                         transition-all shadow-sm hover:border-gray-300"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-2 rounded-xl transition-colors
                    ${isRecording ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Mic className="h-6 w-6" />
                </button>
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </form>

          {/* Example Queries */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-600 text-center mb-4">
              Try asking
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(example)}
                  className="p-4 rounded-xl border border-gray-200 hover:border-blue-200
                           hover:bg-blue-50 text-gray-600 hover:text-blue-600
                           transition-all text-sm text-left"
                >
                  <Search className="h-4 w-4 mb-2 text-gray-400" />
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-500 text-sm">
          © 2024 AI Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AILandingPage;