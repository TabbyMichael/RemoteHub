import { Job } from '../types/job';
import { SearchFilters } from '../types/filters';

export function filterJobs(jobs: Job[], filters: SearchFilters): Job[] {
  return jobs.filter(job => {
    const matchesQuery = !filters.query || 
      job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.query.toLowerCase()) ||
      job.description.toLowerCase().includes(filters.query.toLowerCase());

    const matchesCategory = filters.category === 'All Categories' || 
      job.title.toLowerCase().includes(filters.category.toLowerCase());

    const matchesLocation = filters.location === 'All Locations' || 
      job.location === filters.location;

    return matchesQuery && matchesCategory && matchesLocation;
  });
}