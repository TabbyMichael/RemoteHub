import React from 'react';
import { GlobeIcon, Users, Shield, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our mission is to enable talented humans and companies to work together remotely.
          </h1>
          <p className="text-xl text-gray-600">
            RemoteHub connects global remote workers with companies that offer remote work opportunities. 
            By focusing on transparency and trust, we help both distributed companies and remote workers thrive.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global First</h3>
              <p className="text-gray-600">
                We believe talent knows no borders. Our platform connects the best professionals 
                with opportunities worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
              <p className="text-gray-600">
                Our community is at the heart of everything we do. We foster connections 
                and support among remote workers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Transparency</h3>
              <p className="text-gray-600">
                We verify all job postings and companies to ensure a safe and reliable 
                platform for our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=150&h=150&fit=crop`}
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Co-founder & CEO</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What others say about us ❤️</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "I want to thank you for all the amazing work you do to help people work remotely. 
                Your platform made it so much easier to find great remote opportunities!"
              </p>
              <footer className="font-semibold">- Remote Developer</footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "As a company, finding remote talent was challenging until we discovered RemoteHub. 
                The quality of candidates and the platform's ease of use is outstanding."
              </p>
              <footer className="font-semibold">- Tech Startup CEO</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}