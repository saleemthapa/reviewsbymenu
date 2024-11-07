import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="signup-container w-2xl mx-auto p-12 bg-white rounded shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg">Email:</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              required 
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 mb-2 text-lg">Password:</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
              required 
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
