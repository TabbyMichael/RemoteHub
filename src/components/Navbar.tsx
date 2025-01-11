import React from 'react';
import { GlobeIcon, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GlobeIcon className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">RemoteHub</span>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-cyan-500">Browse Jobs</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500">Remote Companies</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500">Resources</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500">Community</a>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600">
              Post a Job
            </button>
          </div>
          <div className="sm:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}