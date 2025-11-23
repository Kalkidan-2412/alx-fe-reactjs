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
      // Simple mock logic: recommend favorite recipes randomly
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      const filtered = updated.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
        favorites: state.favorites.filter((favId) => favId !== id),
        recommendations: state.recommendations.filter((r) => r.id !== id),
      };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      const filtered = updated.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
      };
    });
  },
}));
