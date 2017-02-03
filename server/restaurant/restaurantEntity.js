const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name : String,
	location : String,
	cuisine : String
});
const model = mongoose.model('Restaurant', schema);
module.exports = {
	restaurantModel: model
};
