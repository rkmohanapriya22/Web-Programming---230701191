import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ManageRecipe from './Chef/ManageRecipe';
import CreateRecipe from './Chef/CreateRecipe';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/manage-recipe">Manage Recipes</Link></li>
          <li><Link to="/create-recipe">Create Recipe</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/manage-recipe" element={<ManageRecipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
