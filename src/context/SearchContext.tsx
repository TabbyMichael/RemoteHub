import React, { createContext, useContext, useState, useCallback } from 'react';
import { SearchFilters } from '../types/filters';

interface SearchContextType {
  filters: SearchFilters;
  updateFilters: (newFilters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const initialFilters: SearchFilters = {
  query: '',
  category: 'All Categories',
  location: 'All Locations'
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return (
    <SearchContext.Provider value={{ filters, updateFilters, clearFilters }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}