import React from 'react'
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
const navigate = useNavigate()


if (!recipe) {
return (
<div>
<h2>Recipe not found</h2>
<button onClick={() => navigate('/')}>Back to list</button>
</div>
)
}


return (
<div className="p-4">
<h1 className="text-2xl font-bold">{recipe.title}</h1>
<p className="mt-2">{recipe.description}</p>


<h3 className="mt-4 font-semibold">Ingredients</h3>
<ul className="list-disc ml-6">
{recipe.ingredients?.map((ing, i) => (
<li key={i}>{ing}</li>
))}
</ul>


<h3 className="mt-4 font-semibold">Steps</h3>
<ol className="list-decimal ml-6">
{recipe.steps?.map((step, i) => (
<li key={i}>{step}</li>
))}
</ol>


<div className="mt-6 flex gap-4">
<Link to={`/recipes/${id}/edit`} className="underline">
Edit
</Link>


<DeleteRecipeButton recipeId={id} onDeleted={() => navigate('/')} />
</div>
</div>
)
}


export default RecipeDetails
