import create from 'zustand'


// simple id generator (replace with uuid if desired)
const genId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`


export const useRecipeStore = create((set) => ({
recipes: [
// example seed recipe; remove if you prefer empty initial state
{
id: '1',
title: 'Sample Pancakes',
description: 'Fluffy pancakes with syrup',
ingredients: ['2 cups flour', '2 eggs', '1 cup milk'],
steps: ['Mix ingredients', 'Cook on skillet', 'Serve hot']
}
],


// ADD
addRecipe: (recipe) =>
set((state) => ({
recipes: [...state.recipes, { ...recipe, id: recipe.id ?? genId() }]
})),


// UPDATE
updateRecipe: (id, updates) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r))
})),


// DELETE
deleteRecipe: (id) =>
set((state) => ({
recipes: state.recipes.filter((r) => r.id !== id)
}))
}))
```
