import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

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

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      const filtered = updated.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
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
