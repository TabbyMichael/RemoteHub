import React from 'react';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import JobListings from './components/JobListings/JobListings';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <JobListings />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;