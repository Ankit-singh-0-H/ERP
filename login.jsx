import React, { useState } from 'react';
import { LogIn, User, Lock, ArrowRight } from 'lucide-react';

// The main component for the Transparent Login Interface
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Simple placeholder for the login logic
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (username.length < 3 || password.length < 6) {
      setTimeout(() => {
        setMessage('Please enter valid credentials (min 3 chars for user, 6 for pass).');
        setLoading(false);
      }, 1000);
      return;
    }

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      if (username === 'user' && password === 'password123') {
        setMessage('Login Successful! Welcome.');
        // In a real app, you would handle token storage and redirection here
      } else {
        setMessage('Login Failed: Invalid username or password.');
      }
    }, 2000);
  };

  return (
    // Main container with a visually appealing dark background for the transparent card to stand out
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* The Glassmorphic Login Card 
        - backdrop-blur-md creates the transparency effect
        - bg-white/10 makes the card semi-transparent white (10% opacity)
        - border adds definition
        - shadow-2xl for depth
      */}
      <div 
        className="
          w-full max-w-sm p-8 md:p-10 rounded-xl shadow-2xl 
          bg-white/10 backdrop-blur-md border border-white/20 
          transform transition duration-500 hover:scale-[1.01]
          space-y-6
        "
      >
        <div className="flex flex-col items-center">
          <LogIn className="w-10 h-10 text-white mb-2" />
          <h1 className="text-3xl font-extrabold text-white tracking-wider">
            Sign In
          </h1>
          <p className="text-sm text-white/70 mt-1">Access your personalized dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Username Input */}
          <div className="relative">
            <User className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-white/70" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 border border-transparent focus:border-white/50"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-white/70" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 border border-transparent focus:border-white/50"
            />
          </div>
          
          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                Login <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <p className={`text-center text-sm font-medium ${message.includes('Successful') ? 'text-green-300' : 'text-red-300'}`}>
            {message}
          </p>
        )}

        {/* Create Account Option */}
        <div className="text-center pt-2">
          <p className="text-sm text-white/70">
            Don't have an account?{' '}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setMessage('Redirecting to the registration page...'); }}
              className="text-indigo-400 font-semibold hover:text-indigo-300 transition duration-200"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;