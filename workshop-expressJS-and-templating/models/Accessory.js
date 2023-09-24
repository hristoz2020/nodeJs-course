const {
	Schema,
	model,
	Types: { ObjectId },
} = require("mongoose");

const accessorySchema = new Schema({
	name: { type: String, required: true, minLength: 3 },
	description: { type: String, default: "" },
	imageUrl: { type: String, default: "noCar.jpeg" },
	price: { type: Number, min: 0 },
	owner: { type: ObjectId, ref: "User" },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
