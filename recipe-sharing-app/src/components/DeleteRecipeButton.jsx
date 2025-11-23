import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)


const handleDelete = () => {
const ok = window.confirm('Are you sure you want to delete this recipe?')
if (!ok) return
deleteRecipe(recipeId)
if (onDeleted) onDeleted()
}


return (
<button onClick={handleDelete} className="px-3 py-1 border rounded text-red-700">
Delete
</button>
)
}


export default DeleteRecipeButton
