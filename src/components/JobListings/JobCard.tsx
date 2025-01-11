import React from 'react';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';
import { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md object-cover" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-cyan-600">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
            <span className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm">
              {job.type}
            </span>
          </div>
          <p className="mt-2 text-gray-600 line-clamp-2">{job.description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 flex-wrap">
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
          <div className="mt-4">
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}