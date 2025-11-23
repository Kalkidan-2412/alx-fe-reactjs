import { useRecipeStore } from '../store/recipeStore';

const FavoriteToggle = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      className={`px-2 py-1 rounded ${isFavorite ? 'bg-red-500 text-white' : 'border'}`}
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};
