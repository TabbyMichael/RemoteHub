import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

export default function SearchBar() {
  const { filters, updateFilters } = useSearch();
  const [localQuery, setLocalQuery] = useState(filters.query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ query: localQuery });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Job title or keyword"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <button 
          type="submit"
          className="bg-cyan-500 text-white px-8 py-2 rounded-md hover:bg-cyan-600 transition-colors"
        >
          Find Jobs
        </button>
      </div>
    </form>
  );
}