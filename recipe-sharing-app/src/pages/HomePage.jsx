import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default HomePage;
