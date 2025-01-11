import React from 'react';
import { Users, Globe, Shield } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Join 100,000+ people and start your remote work search here
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Work from anywhere</h3>
            <p className="text-gray-600">
              Find remote jobs that allow you to work from home or anywhere in the world
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect with companies</h3>
            <p className="text-gray-600">
              Discover remote-first companies and connect directly with hiring managers
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified positions</h3>
            <p className="text-gray-600">
              All jobs are manually reviewed and verified for authenticity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}