import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available yet.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
