import React from 'react';
import './DisplayRecipes.css';

const DisplayRecipes = () => {
  return (
    <div className="display-recipes">
      <h2>Recipe Catalog</h2>

      <div className="top-bar">
        <button>Logout</button>

        <select defaultValue="Sort by Prep Time (ASC)">
          <option>Sort by Prep Time (ASC)</option>
          <option>Sort by Prep Time (DESC)</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Prep Time (mins)</th>
            <th>Action</th>
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

export default DisplayRecipes;


