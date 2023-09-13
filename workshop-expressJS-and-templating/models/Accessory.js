const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
	name: { type: String, required: true, minLength: 3 },
	description: { type: String, default: "" },
	imageUrl: { type: String, default: "noCar.jpeg" },
	price: { type: Number, min: 0 },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
