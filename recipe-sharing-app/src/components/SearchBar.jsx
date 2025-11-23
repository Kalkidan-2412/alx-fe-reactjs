import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search by title, ingredients, or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-3 py-2 border rounded mb-4"
    />
  );
};

export default SearchBar;
