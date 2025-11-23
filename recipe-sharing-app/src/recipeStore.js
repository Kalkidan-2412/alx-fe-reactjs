import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  setRecipes: (newRecipes) => {
    set({
      recipes: newRecipes,
      filteredRecipes: newRecipes,
    });
  },

  setSearchTerm: (term) => {
    set((state) => {
      const lowerTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowerTerm) ||
        recipe.description.toLowerCase().includes(lowerTerm) ||
        recipe.ingredients.toLowerCase().includes(lowerTerm)
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    });
  },

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
