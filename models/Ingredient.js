var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({ Ingredient: {
    type: String
},
Unit: {
    type: String
},
Measure: {
    type: String
}});

module.exports = Ingredient = mongoose.model('Ingredient', IngredientSchema);