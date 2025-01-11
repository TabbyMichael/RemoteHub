import React from 'react';
import { Building, Clock, DollarSign, MapPin } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'Worldwide',
    salary: '$80k - $120k',
    type: 'Full-time',
    posted: '2h ago',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=50&h=50&fit=crop'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignLabs',
    location: 'Europe',
    salary: '$70k - $90k',
    type: 'Full-time',
    posted: '5h ago',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=50&h=50&fit=crop'
  }
];

export default function JobList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Latest Remote Jobs</h2>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded-md px-4 py-2">
            <option>All Categories</option>
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2">
            <option>All Locations</option>
            <option>Worldwide</option>
            <option>Americas</option>
            <option>Europe</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.posted}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}