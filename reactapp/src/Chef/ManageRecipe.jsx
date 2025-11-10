import React from 'react';
import './ManageRecipe.css';

const ManageRecipe = () => {
  return (
    <div className="manage-recipe">
      <h2>Manage Recipes</h2>

      <div className="nav-buttons">
        <button>Add Recipe</button>
        <button>Logout</button>
      </div>

      <div className="filter-bar">
        <select defaultValue="All Categories">
          <option>All Categories</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Prep Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">No recipes found</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageRecipe;



