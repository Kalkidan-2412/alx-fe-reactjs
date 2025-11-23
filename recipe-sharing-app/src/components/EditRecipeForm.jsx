import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // Adjust the path as needed

const EditRecipeForm = () => {
  const navigate = useNavigate();
  const { updateRecipe } = useRecipeStore(); // Assuming your store has an updateRecipe function

  const [form, setForm] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    updateRecipe(form);     // Update recipe in the store
    navigate('/');          // Navigate back to home or desired route
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <div className="mb-2">
        <label className="block font-medium">Title</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Ingredients (one per line)</label>
        <textarea
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          className="w-full border rounded px-2 py-1"
          rows={5}
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Steps (one per line)</label>
        <textarea
          value={form.steps}
          onChange={(e) => setForm({ ...form, steps: e.target.value })}
          className="w-full border rounded px-2 py-1"
          rows={5}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button type="submit" className="px-4 py-2 rounded bg-slate-700 text-white">
          Save
        </button>
        <button type="button" className="px-4 py-2 rounded border" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
