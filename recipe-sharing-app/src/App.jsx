import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
