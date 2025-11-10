const Recipe = require('../models/recipeModel');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const sortOrder = req.body.sortOrder || 1;
    const recipes = await Recipe.find().sort({ title: sortOrder });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a recipe
exports.addRecipe = async (req, res) => {
  try {
    await Recipe.create(req.body);
    res.status(200).json({ message: 'Recipe Added Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe Updated Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get recipes by user ID and category
exports.getRecipesByUserId = async (req, res) => {
  try {
    const { userId, category } = req.body;
    const recipes = await Recipe.find({ userId, category });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
