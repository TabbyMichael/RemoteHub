import React from 'react';
import SearchBar from './Search/SearchBar';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover the Best Remote Jobs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find remote jobs and connect with companies that offer you the freedom to work remotely from home or places around the world
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}