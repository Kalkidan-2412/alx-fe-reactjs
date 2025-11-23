import React from 'react';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <FavoritesList />
      <div className="mt-6">
        <RecommendationsList />
      </div>
    </div>
  );
};

export default Dashboard;
