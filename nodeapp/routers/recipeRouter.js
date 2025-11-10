
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Recipe Routes
router.post('/add', recipeController.addRecipe);             // Add recipe
router.get('/', recipeController.getAllRecipes);             // Get all recipes
router.get('/:id', recipeController.getRecipeById);          // Get recipe by ID
router.get('/user/:userId', recipeController.getRecipesByUserId); // Get all recipes by user
router.put('/:id', recipeController.updateRecipe);           // Update recipe
router.delete('/:id', recipeController.deleteRecipe);        // Delete recipe

module.exports = router;
