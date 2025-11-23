import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

import React from 'react'
<li key={r.id} className="mb-2">
<Link to={`/recipes/${r.id}`} className="underline">
{r.title}
</Link>
</li>
))}
</ul>


<CreateRecipeInline />
</div>
)
}


// small inline create form for convenience
const CreateRecipeInline = () => {
const addRecipe = useRecipeStore((s) => s.addRecipe)


const onCreate = () => {
addRecipe({
title: 'New Recipe',
description: '',
ingredients: [],
steps: []
})
}


return (
<div className="mt-6">
<button className="px-3 py-1 border rounded" onClick={onCreate}>
+ Create empty recipe
</button>
</div>
)
}


export default function App() {
return (
<Router>
<div className="max-w-3xl mx-auto">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/recipes/:id" element={<RecipeDetails />} />
<Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
</Routes>
</div>
</Router>
)
}
function App() {
  return (
    <div style={{ width: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
