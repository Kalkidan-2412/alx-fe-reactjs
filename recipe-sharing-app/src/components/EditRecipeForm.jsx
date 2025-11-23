import React, { useState } from 'react'


return (
<form onSubmit={onSubmit} className="p-4 max-w-xl">
<div>
<label className="block font-medium">Title</label>
<input
value={form.title}
onChange={(e) => setForm({ ...form, title: e.target.value })}
className="w-full border rounded px-2 py-1"
/>
</div>


<div className="mt-2">
<label className="block font-medium">Description</label>
<textarea
value={form.description}
onChange={(e) => setForm({ ...form, description: e.target.value })}
className="w-full border rounded px-2 py-1"
/>
</div>


<div className="mt-2">
<label className="block font-medium">Ingredients (one per line)</label>
<textarea
value={form.ingredients}
onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
className="w-full border rounded px-2 py-1"
rows={5}
/>
</div>


<div className="mt-2">
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
)
}


export default EditRecipeForm
