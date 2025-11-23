import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id)).filter(Boolean)
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
