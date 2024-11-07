import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { ArrowRight, Github, Zap, Search } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup'; // Import the Signup component

function App() {
  const [restaurants, setRestaurants] = useState([]); // State to hold restaurant data

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await fetchRestaurants(); // Call the fetch function
      setRestaurants(data); // Set the restaurant data
    };

    getRestaurants(); // Call the function to fetch data
  }, []);

  return (
    <Router>
           <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-indigo-600" />
                  <span className="text-xl font-bold text-gray-900">Reviews by Menu</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <a href="#write-review" className="text-gray-600 hover:text-gray-900">Write a review</a>
            
            <Link 
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </Link>
            </div>
          </div>
        </nav>        
</header>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Navigation */}
   
        {/* Routes */}
        <Routes>
          {/* Main Content for Home */}
          <Route path="/" element={
            <div className="container mx-auto px-6 pt-20 pb-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
              What are you craving for ?
            </h1>
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full px-6 py-4 rounded-full bg-white shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
                <Search className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600">
                Just finished your meal? <a href="#share" className="text-indigo-600 font-medium hover:text-indigo-700">Share your thoughts with us <ArrowRight className="inline h-5 w-5" /></a>
              </p>
            </div>
            <br />
           <hr />
            <section className="py-8 bg-gray">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Top Rated Restaurants</h2>
              <Link 
                to="/more-info"
                className="bg-indigo-500 text-white hover:bg-indigo-700 px-4 py-2 rounded"
              >
                See More
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {restaurants.map((restaurant) => ( // Map through the restaurant data
                <div key={restaurant.name} className="border p-4 rounded shadow">
                  <h3 className="font-bold">{restaurant.name}</h3>
                  <p>{restaurant.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-indigo-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join thousands of food lovers sharing their dining experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Write a Review
              </button>
              <Link 
                to="/signup"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Started Now 
              </Link>
            </div>
          </div>
        </section>
          </div>
                  
         } />


          {/* Route for the Signup Page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Zap className="h-6 w-6 text-indigo-500" />
                <span className="text-xl font-bold text-white">Reviews by Menu</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://github.com" className="hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              © {new Date().getFullYear()} Reviews by Menu. All rights reserved.
            </div>
          </div>
        </footer>
    </Router>
    
  );
  
}

export default App;

