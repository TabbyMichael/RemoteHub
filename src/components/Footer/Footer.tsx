import React from 'react';
import { GlobeIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              REMOTE JOBS
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Jobs by Type</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Jobs by Role</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Job Search</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              REMOTE JOBS BY TYPE
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Full-Time</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Part-Time</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Contract</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Freelance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              REMOTE COMPANIES
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">All Remote Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Company Profiles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Work Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Remote Work Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-600">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="h-6 w-6 text-cyan-500" />
            <span className="text-gray-600">© 2024 RemoteHub. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-cyan-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-cyan-600">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-cyan-600">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}