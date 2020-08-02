var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({ 
Title: {
    type: String
},
Ingredients: [{
    type: String
}],
Directions: {
    type: String
}});

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);