import React from 'react';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import JobListings from './components/JobListings/JobListings';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';





function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <JobListings />
        <AboutUs />
        <Contact />
        <Privacy />
        <Terms />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;