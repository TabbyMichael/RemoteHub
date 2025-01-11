import React, { useState, useMemo } from 'react';
import { generateJobs } from '../../utils/jobsData';
import { filterJobs } from '../../utils/searchUtils';
import { useSearch } from '../../context/SearchContext';
import JobCard from './JobCard';
import Pagination from './Pagination';
import JobFilters from './JobFilters';

const JOBS_PER_PAGE = 20;

export default function JobListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const { filters } = useSearch();
  
  const allJobs = useMemo(() => generateJobs(), []);
  const filteredJobs = useMemo(() => filterJobs(allJobs, filters), [allJobs, filters]);
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {filteredJobs.length} Remote Jobs Found
        </h2>
        <JobFilters />
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-cyan-600 hover:text-cyan-700"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {currentJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}