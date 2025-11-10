import React, { useState } from 'react';
import './CreateRecipe.css';

const CreateRecipe = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    difficulty: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
    tags: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const temp = {};
    if (!form.title) temp.title = 'Title is required';
    if (!form.category) temp.category = 'Category is required';
    if (!form.difficulty) temp.difficulty = 'Difficulty is required';
    if (!form.prepTime) temp.prepTime = 'Prep time must be at least 1 minute';
    if (!form.cookTime) temp.cookTime = 'Cook time must be at least 1 minute';
    if (!form.servings) temp.servings = 'Servings must be at least 1';
    if (!form.ingredients) temp.ingredients = 'At least one ingredient is required';
    if (!form.instructions) temp.instructions = 'At least one instruction is required';
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

 return (
    <div className="create-recipe">
      <h2>Add Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" value={form.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <label>Category:</label>
        <input name="category" value={form.category} onChange={handleChange} />
        {errors.category && <p className="error">{errors.category}</p>}

        <label>Difficulty:</label>
        <input name="difficulty" value={form.difficulty} onChange={handleChange} />
        {errors.difficulty && <p className="error">{errors.difficulty}</p>}

        <label>Prep Time (minutes):</label>
        <input name="prepTime" value={form.prepTime} onChange={handleChange} />
        {errors.prepTime && <p className="error">{errors.prepTime}</p>}

        <label>Cook Time (minutes):</label>
        <input name="cookTime" value={form.cookTime} onChange={handleChange} />
        {errors.cookTime && <p className="error">{errors.cookTime}</p>}

        <label>Servings:</label>
        <input name="servings" value={form.servings} onChange={handleChange} />
        {errors.servings && <p className="error">{errors.servings}</p>}

        <label>Cuisine:</label>
        <input name="cuisine" value={form.cuisine} onChange={handleChange} />

        <label>Ingredients (comma-separated):</label>
        <input name="ingredients" value={form.ingredients} onChange={handleChange} />
        {errors.ingredients && <p className="error">{errors.ingredients}</p>}

        <label>Instructions (comma-separated):</label>
        <input name="instructions" value={form.instructions} onChange={handleChange} />
        {errors.instructions && <p className="error">{errors.instructions}</p>}

        <label>Tags (comma-separated):</label>
        <input name="tags" value={form.tags} onChange={handleChange} />

        <label>Notes:</label>
        <input name="notes" value={form.notes} onChange={handleChange} />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;


