import React from 'react';
import { useSearch } from '../../context/SearchContext';
import { FilterOption } from '../../types/filters';

const categories: FilterOption[] = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Development', label: 'Development' },
  { value: 'Design', label: 'Design' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Sales', label: 'Sales' },
];

const locations: FilterOption[] = [
  { value: 'All Locations', label: 'All Locations' },
  { value: 'Worldwide', label: 'Worldwide' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Asia', label: 'Asia' },
];

export default function JobFilters() {
  const { filters, updateFilters } = useSearch();

  return (
    <div className="flex gap-4">
      <select
        value={filters.category}
        onChange={(e) => updateFilters({ category: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      
      <select
        value={filters.location}
        onChange={(e) => updateFilters({ location: e.target.value })}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        {locations.map(location => (
          <option key={location.value} value={location.value}>
            {location.label}
          </option>
        ))}
      </select>
    </div>
  );
}