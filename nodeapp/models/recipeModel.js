const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
 title: {
  type: String,
  required: [true, 'Recipe title is required'],
  trim: true,
 },
 category: { 
  type: String, 
  required: true,
  enum: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert']
 },
 difficulty: { 
  type: String, 
  required: true,
  enum: ['Easy', 'Medium', 'Hard']
 },
 prepTimeInMinutes: { type: Number, required: true, min: 1 },
 cookTimeInMinutes: { type: Number, required: true, min: 1 },
 servings: { type: Number, required: true, min: 1 },
 cuisine: { type: String }, // optional
 ingredients: { type: [String], required: true, validate: v => v.length > 0 },
 instructions: { type: [String], required: true, validate: v => v.length > 0 },
 tags: { type: [String] }, // optional
 notes: { type: String }, // optional
 nutritionalInfo: {
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number
 },
 userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

// Export
module.exports = mongoose.model('Recipe', recipeSchema);


